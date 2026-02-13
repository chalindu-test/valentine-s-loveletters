/**
 * Image Optimization Script for Valentine's Love Letters
 *
 * This script optimizes all images in public/photos/ directory:
 * - Backs up originals to public/photos-original/
 * - Compresses images to ~200-500KB while maintaining quality
 * - Resizes large images to max 1920px width (perfect for web)
 * - Converts to high-quality JPEG
 *
 * Usage:
 *   npm run optimize-images
 *
 * To restore originals:
 *   Just copy files from public/photos-original/ back to public/photos/
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTOS_DIR = path.join(__dirname, '../public/photos');
const BACKUP_DIR = path.join(__dirname, '../public/photos-original');
const MAX_WIDTH = 1920; // Max width in pixels (good for Full HD displays)
const QUALITY = 85; // JPEG quality (85 is great balance of quality/size)

// Supported image formats
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

async function optimizeImages() {
  console.log('🎨 Valentine\'s Photo Optimizer\n');

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log('📁 Created backup directory: public/photos-original/\n');
  }

  // Get all image files
  const files = fs.readdirSync(PHOTOS_DIR).filter(file => {
    const ext = path.extname(file);
    return IMAGE_EXTENSIONS.includes(ext);
  });

  if (files.length === 0) {
    console.log('❌ No images found in public/photos/');
    return;
  }

  console.log(`📸 Found ${files.length} images to optimize\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(PHOTOS_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);

    // Skip if file was already processed (case insensitive check)
    if (!fs.existsSync(filePath)) {
      continue;
    }

    try {
      // Get original file size
      const originalStats = fs.statSync(filePath);
      const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
      totalOriginalSize += originalStats.size;

      // Backup original if not already backed up
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
      }

      // Create output filename (always lowercase .jpg)
      const baseName = path.parse(file).name;
      const outputFileName = baseName + '.jpg';
      const outputPath = path.join(PHOTOS_DIR, outputFileName);
      const tempPath = outputPath + '.tmp';

      // Optimize image
      await sharp(filePath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({
          quality: QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toFile(tempPath);

      // Get optimized file size before replacing
      const optimizedStats = fs.statSync(tempPath);
      const optimizedSizeMB = (optimizedStats.size / 1024 / 1024).toFixed(2);
      totalOptimizedSize += optimizedStats.size;

      // Remove original file if it exists and is different from output
      const originalLower = file.toLowerCase();
      const outputLower = outputFileName.toLowerCase();

      if (originalLower !== outputLower) {
        fs.unlinkSync(filePath);
      }

      // Move temp file to final location
      fs.renameSync(tempPath, outputPath);

      const saved = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
      processed++;

      console.log(`✅ ${processed}/${files.length} - ${file}`);
      console.log(`   ${originalSizeMB} MB → ${optimizedSizeMB} MB (${saved}% smaller)\n`);

    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }

  if (processed === 0) {
    console.log('ℹ️  No images needed optimization (already optimized)\n');
    return;
  }

  // Summary
  const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
  const totalOptimizedMB = (totalOptimizedSize / 1024 / 1024).toFixed(2);
  const totalSaved = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);

  console.log('═══════════════════════════════════════');
  console.log('🎉 Optimization Complete!');
  console.log('═══════════════════════════════════════');
  console.log(`📊 Total: ${totalOriginalMB} MB → ${totalOptimizedMB} MB`);
  console.log(`💾 Saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB (${totalSaved}% reduction)`);
  console.log(`\n📁 Original images backed up in: public/photos-original/`);
  console.log(`✨ Your photos will now load much faster! 💕\n`);
}

// Run the optimizer
optimizeImages().catch(console.error);
