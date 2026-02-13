# Image Optimization Script

This folder contains the image optimization script for the Valentine's Love Letters project.

## 📸 `optimize-images.js`

Automatically optimizes all photos in `public/photos/` directory for fast web loading.

### What it does:

- ✅ Backs up originals to `public/photos-original/`
- ✅ Compresses images to ~200-500KB (maintains quality)
- ✅ Resizes to max 1920px width (perfect for Full HD displays)
- ✅ Converts to optimized JPEG format
- ✅ Reduces total size by ~80-95%

### Usage:

```bash
npm run optimize-images
```

### When to use:

- **Before deploying** to GitHub Pages (first time)
- **After adding new photos** to `public/photos/`
- **After removing photos** (it will skip already optimized ones)
- **After replacing photos** with different ones

### How to add/change photos:

1. Add your new photos to `public/photos/` directory
2. Run `npm run optimize-images`
3. Update photo captions in `src/pages/Memories.tsx` if needed

### Restore originals:

If you need the original high-resolution photos back:

```bash
cp -r public/photos-original/* public/photos/
```

### Configuration:

Edit `scripts/optimize-images.js` to change settings:

- `MAX_WIDTH` - Maximum width in pixels (default: 1920)
- `QUALITY` - JPEG quality 1-100 (default: 85)

### Performance Impact:

**Before optimization:**
- Total size: ~60-70 MB
- Load time: 10-30 seconds on average connection
- Mobile data: Very high usage

**After optimization:**
- Total size: ~10-15 MB
- Load time: 2-5 seconds on average connection
- Mobile data: Reasonable usage

---

💕 **Tip:** Always run this script before deploying to ensure your Valentine's gift loads quickly!
