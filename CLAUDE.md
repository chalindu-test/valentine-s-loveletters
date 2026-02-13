# Valentine's Love Letters - Project Documentation

## Project Overview

A romantic Valentine's Day website created for Pawani by Chalindu. This is a personalized, interactive web experience featuring magical animations, romantic effects, memories, and a timeline of your relationship.

**Target Deployment**: GitHub Pages
**Website Purpose**: Valentine's Day gift and love letter
**Recipient**: Pawani (Wife)
**Current Status**: Production-ready with 19 optimized photos, real timeline, lightbox gallery, and romantic effects

## Technology Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS with custom Valentine's theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM v6
- **Image Processing**: Sharp (for optimization script)
- **Animations**:
  - CSS animations (hearts, sparkles, particles, fade-ins)
  - Canvas Confetti for celebration effects (4-stage burst)
  - Cursor trail effects
  - Floating sparkles
- **Fonts**:
  - Great Vibes (script font for romantic headings)
  - Lora (serif font for body text)
- **Icons**: Lucide React
- **Audio**: "All of Me.mp3" - Auto-plays on page load

## Project Structure

```
valentine-s-loveletters/
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components (40+ components)
│   │   ├── HeartParticles.tsx   # 25 animated falling hearts (6 varieties)
│   │   ├── Sparkles.tsx         # ✨ NEW: Magical sparkle effect generator
│   │   ├── CursorTrail.tsx      # 💕 NEW: Mouse trail with hearts & sparkles
│   │   ├── LoveQuote.tsx        # 💬 NEW: Random romantic quote banner
│   │   ├── ValentineModal.tsx   # Interactive "Will you be my Valentine?" modal
│   │   ├── Navbar.tsx           # Navigation with auto-playing audio
│   │   ├── Footer.tsx           # Enhanced footer with romantic quote
│   │   └── NavLink.tsx          # Navigation link component
│   ├── pages/
│   │   ├── Index.tsx            # Hero/landing page with all effects
│   │   ├── Memories.tsx         # Photo gallery page with sparkles
│   │   ├── Timeline.tsx         # Relationship timeline with sparkles
│   │   └── NotFound.tsx         # 404 page
│   ├── assets/
│   │   ├── hero-bg.jpg          # Hero background image
│   │   ├── All of Me.mp3        # Background music (auto-plays)
│   │   └── I Like Me Better.mp3 # Alternative song
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   └── use-toast.ts         # Toast notifications hook
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles & custom animations
│   └── vite-env.d.ts            # TypeScript declarations (includes .mp3)
├── public/
│   ├── heart-favicon.svg        # 💕 Custom heart-shaped icon
│   ├── favicon.ico
│   ├── robots.txt
│   ├── photos/                  # ✅ 19 optimized photos (all .jpg lowercase)
│   └── photos-original/         # ✅ Backup of original high-res photos
├── scripts/
│   ├── optimize-images.js       # ✅ Image optimization script
│   └── README.md                # Documentation for optimization script
├── index.html                   # HTML entry point (updated title)
├── CLAUDE.md                    # This file - Project documentation
├── IMPROVEMENTS.md              # Detailed list of all improvements
└── TASK.md                      # Task tracking
```

## Key Features

### 1. **Hero Page (Index)** 💕
- **Enhanced romantic gradient background** with animated overlay
- **Decorative floating emojis** (💕💖💗💝) in corners
- **Animated falling heart particles** (25 hearts, 6 varieties)
- **✨ Magical sparkles** appearing randomly
- **💫 Cursor trail** - hearts and sparkles follow mouse
- **💬 Love quote banner** - random romantic quotes
- **Large floating emoji** above title
- **Enhanced "Open My Heart" button** with dramatic hover effects
- **Valentine's question modal** with playful "No" button that runs away
- **4-stage confetti celebration** (450+ particles) on "Yes" click
- **Auto-navigation** to Memories page after acceptance

### 2. **Memories Gallery** 📸
- **✅ 19 real photos displayed** with romantic captions
- **Lightbox/Modal feature** - click any photo to view full-screen
- **Gradient background** with subtle pink tones
- **Masonry grid layout** - three aspect ratios (tall, wide, square)
- **Image hover effects** - zoom, dark overlay, caption slide-up
- **Staggered fade-in animations** on page load
- **Optimized images** - 60MB → 11MB (81% reduction, loads 5-6x faster)
- **Lazy loading** for better performance
- **✨ Magical sparkles** throughout
- **Decorative photo emoji** at top
- **Close button & click-outside** to exit lightbox

### 3. **Timeline Page** 📖
- **✅ 14 real milestones** from June 2020 to February 2026
- **Complete relationship story** - from first chat to Valentine's Day 2026
- **Gradient background** with gold/accent tones
- **Enhanced vertical timeline** with gradient line (pink to gold)
- **Glowing, pulsing timeline dots** with hearts
- **Intersection Observer** for scroll-triggered animations
- **Enhanced timeline cards** with gradients and dramatic hovers
- **Romantic descriptions** for each milestone
- **✨ Magical sparkles** throughout
- **Decorative book emoji** at top (properly spaced, no cropping!)
- **Elegant divider line** under heading

### 4. **Navigation** 🎵
- **Fixed navbar** with glass morphism effect
- **Large gradient logo** - "Pawani+Chalindu" (fully responsive, no cropping!)
- **Animated heartbeat heart icon** that changes color on hover
- **Gradient text animation** on logo
- **Active page highlighting** with gradient backgrounds
- **Audio player** - Auto-plays "All of Me.mp3" on page load
- **Visual indicator** (pink ping dot) when music is playing
- **Fully responsive** - ultra-compact on mobile, large on desktop

### 5. **Footer** 💝
- **Gradient background** with subtle glow orbs
- **Romantic quote**: "Every love story is beautiful, but ours is my favorite"
- **Animated heartbeat heart**
- **Better visual hierarchy**
- **Elegant styling** with multiple text layers

### 6. **Magical Effects & Animations** ✨

#### NEW Effects:
- **Sparkles** - 4-point stars that appear, rotate, and fade randomly
- **Cursor Trail** - Hearts (💕) and sparkles (✨) follow mouse movement
- **Love Quotes** - Random romantic messages at bottom of hero page
- **Enhanced Confetti** - 4-stage burst with 450+ particles

#### Heart Particles:
- **25 hearts** (increased from 20)
- **6 varieties**: ♥, 💕, 💖, 💗, 💝, 💓
- Varied sizes (16-44px) and opacities
- Longer animations (8-20s)
- Subtle blur for depth

#### CSS Animations:
- `heartbeat` - Pulsing animation
- `float` - Graceful floating (3 positions)
- `fall` - Hearts falling and rotating
- `fade-in-up` - Entrance animation
- `sparkle` - Star sparkle effect
- `twinkle` - Gentle twinkling
- `fade-out-up` - Cursor trail fade
- `gradient` - Flowing gradient effect
- `glow` - Glowing drop shadow
- `animate-pulse` - Built-in Tailwind pulse

## Color Theme

Custom Valentine's color palette with romantic gradients:
- **Primary**: Pink/Rose (#ff6b8a - #ff6b9d)
- **Accent**: Gold/Peach (#ffc3a0 - #ffd700)
- **Background**: Soft pink gradient (#fff5f7)
- **Valentine Gradient**: Pink to peach (hsl(350 100% 85%) to hsl(20 100% 82%))
- **Text**: Dark rose for contrast
- **Borders**: Soft primary tones

## Audio Configuration

### Current Setup:
- **Song**: "All of Me.mp3" (imported from `src/assets/`)
- **Auto-play**: ✅ Yes - Starts playing automatically on page load
- **Loop**: ✅ Yes - Plays continuously
- **Fallback**: If browser blocks autoplay, user can click play button
- **Visual Indicator**: Pink ping dot shows when music is playing
- **Controls**: Volume toggle in navbar (unmute by default)

### How to Change Song:
1. Place your MP3 file in `src/assets/`
2. Update import in `src/components/Navbar.tsx`:
   ```typescript
   import ourSong from "@/assets/Your-Song.mp3";
   ```

## Image Optimization 🚀

### Automated Optimization Script
A powerful optimization script is included in `scripts/optimize-images.js` that:
- Backs up originals to `public/photos-original/`
- Compresses images to ~200-500KB (maintains quality)
- Resizes to max 1920px width (perfect for web)
- Converts to optimized JPEG format
- Reduces total size by ~80-95%

### Usage:
```bash
npm run optimize-images
```

### When to Optimize:
- **Before first deployment** (already done ✅)
- After adding new photos
- After replacing photos
- After removing photos

### Current Status:
- ✅ **19 photos optimized**: 60.77 MB → 11.54 MB (81% reduction)
- ✅ **Originals backed up** in `public/photos-original/`
- ✅ **All extensions lowercase** (.jpg) for Linux/GitHub Pages compatibility

### To Restore Originals:
```bash
cp -r public/photos-original/* public/photos/
```

### Performance Impact:
- **Before**: 60+ MB, 10-30 second load time
- **After**: 11 MB, 2-5 second load time
- **Mobile data**: Reduced by 81%

See `scripts/README.md` for detailed documentation.

## Customization Guide

### Update Timeline Milestones
Edit `src/pages/Timeline.tsx`, lines 5-20:
```typescript
const milestones = [
  { date: "15 June 2020", title: "The Day We First Chat", description: "Our story began with a simple WhatsApp message that changed everything 💕" },
  { date: "26 June 2020", title: "Started Our Love Story", description: "The day our hearts decided to beat as one 💞" },
  // 14 total milestones currently configured
  // Add/modify your milestones here
];
```

**Current milestones**: 14 real events from June 2020 to February 2026

### Add/Change Photos in Memories
1. Place new photos in `public/photos/` directory
2. **Run optimization**: `npm run optimize-images`
3. Update `src/pages/Memories.tsx` photos array (lines 5-25):
```typescript
const photos = [
  { id: 1, src: "/photos/IMG_2280.jpg", caption: "Forever starts with you 💕", aspect: "tall" },
  { id: 2, src: "/photos/IMG_3143.jpg", caption: "Our beautiful journey together 🌸", aspect: "wide" },
  // 19 photos currently configured
  // Add your photos here
];
```
4. **Important**: Use lowercase `.jpg` extension (required for GitHub Pages)
5. Choose aspect ratio: `"tall"` (row-span-2), `"wide"` (col-span-2), or `"square"`

**Current photos**: 19 optimized images with romantic captions

### Customize Love Quotes
Edit `src/components/LoveQuote.tsx`, lines 4-11:
```typescript
const quotes = [
  "You are my today and all of my tomorrows",
  "Your custom quote here",
  // Add more quotes
];
```

### Update Personal Info
- **Names**: `src/components/Navbar.tsx` line 47
- **Page Title**: `index.html` line 6
- **Meta Description**: `index.html` line 8
- **Valentine Message**: `src/components/ValentineModal.tsx` lines 35-40
- **Hero Greeting**: `src/pages/Index.tsx` lines 52-60
- **Footer Quote**: `src/components/Footer.tsx` line 11

### Change Colors
Edit CSS variables in `src/index.css` (lines 6-50):
```css
:root {
  --primary: 350 60% 60%;        /* Main pink color */
  --accent: 38 60% 70%;          /* Gold/peach accent */
  --valentine-start: 350 100% 85%;
  --valentine-end: 20 100% 82%;
}
```

## Responsive Design

### Navbar Sizing (✅ Fixed - No Cropping):
```
Container Padding:
Mobile:            py-2.5 (10px)
Small (≥640px):    py-3 (12px)
Medium (≥768px):   py-3.5 (14px)
Large (≥1024px):   py-4 (16px)

Logo Text:
Mobile (<640px):   text-lg (18px)   heart: w-4 (16px)
Small (≥640px):    text-2xl (24px)  heart: w-6 (24px)
Medium (≥768px):   text-3xl (30px)  heart: w-8 (32px)
Large (≥1024px):   text-4xl (36px)  heart: w-10 (40px)
XLarge (≥1280px):  text-5xl (48px)  heart: w-10 (40px)
```

### Timeline Page Spacing (✅ Fixed - No Emoji Cropping):
```
Top Padding: pt-24 (96px) - ensures navbar doesn't overlap
Emoji Container: py-4 (16px top/bottom padding)
Emoji Span: leading-none block - controls line height
```

### Navigation Items:
```
Mobile:   text-[9px]  px-1   py-0.5
XSmall:   text-[10px] px-1.5 py-1
Small+:   text-sm     px-3   py-1.5-2
```

### Key Responsive Features:
- ✅ Navbar padding scales with screen size
- ✅ No text or emoji cropping on any device
- Ultra-compact navigation on mobile
- Scales up beautifully on larger screens
- Touch-friendly button sizes
- Optimized cursor trail for mobile

## Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git repository initialized (already done ✓)
- Node.js installed

### Step 1: Configure Vite for GitHub Pages

Add this to `vite.config.ts` after line 7:
```typescript
base: '/valentine-s-loveletters/',  // Replace with your repo name
```

### Step 2: Add Deployment Scripts

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

### Step 3: Build the Project
```bash
npm run build
```

### Step 4: Deploy

**Option A: Using gh-pages package (Recommended)**
```bash
npm run deploy
```

**Option B: GitHub Actions**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Step 5: Access Your Site
Your site will be available at:
```
https://<your-github-username>.github.io/valentine-s-loveletters/
```

## Development Workflow

### Local Development
```bash
npm run dev              # Start dev server at localhost:8080
npm run build            # Production build
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run optimize-images  # Optimize photos (run after adding new images)
```

### Making Changes
1. Edit source files in `src/`
2. If adding/changing photos: run `npm run optimize-images`
3. Test locally with `npm run dev`
4. Commit changes to git
5. Push to GitHub
6. Deploy to GitHub Pages with `npm run deploy`

## Important Notes

### Before Deploying
- [x] ~~Add your photos to `/public/photos/`~~ (✅ 19 photos added)
- [x] ~~Optimize images~~ (✅ 81% size reduction, 60MB → 11MB)
- [x] ~~Add your song~~ (✅ "All of Me.mp3" configured)
- [x] ~~Update timeline milestones~~ (✅ 14 real milestones configured)
- [x] ~~Update names in navbar~~ (✅ "Pawani+Chalindu")
- [x] ~~Customize the hero message~~ (✅ Enhanced)
- [x] ~~Test all animations and interactions~~ (✅ All working)
- [x] ~~Verify mobile responsiveness~~ (✅ Fully responsive)
- [x] ~~Fix navbar cropping~~ (✅ Responsive padding added)
- [x] ~~Fix timeline emoji cropping~~ (✅ Proper spacing added)
- [x] ~~Add photo captions~~ (✅ Romantic captions for all 19 photos)
- [x] ~~Enable photo lightbox~~ (✅ Click to view full-screen)
- [ ] Customize love quotes (optional - 8 default quotes included)
- [ ] Configure Vite base path for GitHub Pages
- [ ] Test on different devices and browsers

### Current Enhancements (All Implemented ✅)
**Visual Effects:**
- ✅ Sparkle effects on all pages
- ✅ Cursor trail with hearts
- ✅ Love quote banner
- ✅ Enhanced confetti (4-stage burst)
- ✅ Floating decorative emojis
- ✅ Gradient animations
- ✅ Dramatic hover effects

**Media & Content:**
- ✅ Auto-playing music ("All of Me.mp3")
- ✅ 19 optimized photos (81% smaller)
- ✅ Photo lightbox/modal viewer
- ✅ 14 real timeline milestones
- ✅ Romantic captions for all photos

**Technical:**
- ✅ Custom heart favicon
- ✅ Responsive navbar (no cropping!)
- ✅ Timeline emoji proper spacing
- ✅ Image optimization script
- ✅ Lazy loading for images
- ✅ Case-insensitive filename handling

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (tested for all screen sizes)
- Uses modern CSS features (backdrop-filter, gradients, clip-path)
- **Autoplay Note**: Some browsers block autoplay. Music will gracefully fall back to muted if blocked.

### Performance
- ✅ **Images optimized**: 60MB → 11MB (81% reduction)
- ✅ **Lazy loading** for all photos
- ✅ **Progressive JPEG** format for faster perceived loading
- ✅ **Max 1920px width** - perfect for Full HD displays
- Minimal bundle size with Vite
- No external API calls
- Throttled cursor trail (100ms)
- Efficient CSS animations
- **Load time**: 2-5 seconds (was 10-30 seconds)

## File Modification Guidelines

### Never Modify
- `src/components/ui/*` - Auto-generated shadcn components
- `node_modules/*` - Dependencies
- `.git/*` - Git internals
- `bun.lockb` or `package-lock.json` - Dependency locks

### Safe to Modify
- `src/pages/*` - Your content pages
- `src/pages/Timeline.tsx` - Timeline milestones array (lines 5-20)
- `src/pages/Memories.tsx` - Photos array (lines 5-25)
- `src/components/HeartParticles.tsx` - Heart animation settings
- `src/components/Sparkles.tsx` - Sparkle effect settings
- `src/components/LoveQuote.tsx` - Quote messages (lines 4-11)
- `src/components/ValentineModal.tsx` - Modal text
- `src/components/Navbar.tsx` - Names, audio file
- `src/components/Footer.tsx` - Footer content
- `src/index.css` - Color theme and animations
- `scripts/optimize-images.js` - Optimization settings (MAX_WIDTH, QUALITY)
- `public/photos/` - Add/remove photos (then run optimize script)

### Configuration Files
- `vite.config.ts` - Add `base` for GitHub Pages
- `package.json` - Add deploy script
- `tailwind.config.ts` - Theme extensions
- `index.html` - Meta tags, title, favicon

## Troubleshooting

### Blank Page After Deploy
- Check `base` path in `vite.config.ts` matches repo name
- Verify assets are loading (check browser console)
- Ensure React Router uses correct basename

### Images Not Loading
- ✅ **Use lowercase .jpg extension** (required for Linux/GitHub Pages)
- Use absolute paths: `/photos/image.jpg`
- Verify files are in `/public/photos/` directory
- Check file names match exactly (case-sensitive on Linux)
- Run `npm run optimize-images` to ensure proper formatting
- **Tip**: The optimization script automatically converts to lowercase .jpg

### Audio Not Playing
- ✅ Current setup auto-plays on page load
- Browser may block autoplay (gracefully handled)
- Check browser console for errors
- Verify `src/assets/All of Me.mp3` exists
- File size should be reasonable (<10MB)

### Text Cropping in Navbar
- ✅ **Fixed!** Logo now fully responsive with scaled padding
- Navbar padding: `py-2.5 sm:py-3 md:py-3.5 lg:py-4`
- Logo has `py-1` padding for breathing room
- `whitespace-nowrap` prevents text wrapping
- `leading-tight` controls line height

### Emoji Cropping in Timeline
- ✅ **Fixed!** Book emoji (📖) has proper spacing
- Page top padding: `pt-24` (increased from pt-20)
- Emoji container: `py-4` (increased from py-2)
- Emoji span: `leading-none block` for line height control

### Sparkles Not Appearing
- Check z-index values (sparkles are z-50)
- Verify component is imported and used
- Check browser console for errors

## Git Workflow

### Current Status
```bash
git status  # Check what's changed
```

### Recommended Workflow
```bash
# Commit your changes
git add .
git commit -m "Update Valentine's website with [your changes]"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Components Reference

### New Components Added
1. **Sparkles.tsx** - Magical sparkle effect generator
   - Random appearance across screen
   - 4-point star SVG with gradient
   - Fade, scale, rotate animation

2. **CursorTrail.tsx** - Mouse trail with hearts
   - Throttled to 100ms for performance
   - Alternating emojis (💕 ✨ 💖)
   - Fade-out-up animation

3. **LoveQuote.tsx** - Random romantic quote banner
   - 8 pre-configured quotes
   - Bottom center placement
   - Fades in after 1 second
   - Hides when modal opens

### Enhanced Components
1. **HeartParticles.tsx** - Now with 6 heart varieties
2. **Navbar.tsx** - Auto-playing music, responsive padding (no cropping)
3. **Footer.tsx** - Gradient background, romantic quote
4. **ValentineModal.tsx** - Enhanced styling, better messaging
5. **Index.tsx** - 4-stage confetti, all new effects
6. **Memories.tsx** - Lightbox viewer, 19 real photos, hover effects
7. **Timeline.tsx** - 14 real milestones, proper emoji spacing

## Future Enhancements (Optional Ideas)

- [ ] Add a photo upload feature
- [ ] Create a "Letters" page with written messages
- [ ] Add a countdown timer to Valentine's Day
- [ ] Integrate a Spotify playlist embed
- [ ] Add a guest book/comments section
- [ ] Create an interactive quiz about your relationship
- [ ] Add seasonal themes (Christmas, Anniversary, etc.)
- [ ] Implement dark mode toggle
- [ ] Add more animation effects
- [ ] Create a slideshow feature for memories

## Technical Details

### TypeScript Declarations
- `.mp3` files: Declared in `src/vite-env.d.ts`
- All components are typed
- Props interfaces defined

### Animation Performance
- CSS animations preferred over JavaScript
- `will-change` used sparingly
- Throttled event listeners (cursor trail)
- Efficient re-renders with React hooks

### Accessibility
- All decorative elements have `aria-hidden="true"`
- Proper aria-labels on interactive elements
- Keyboard navigation supported
- Semantic HTML structure

---

**Built with 💕 by Chalindu for Pawani**

**Project Status**: Production-ready with 19 optimized photos, real timeline, and full romantic enhancements ✨

**Last Updated**: February 13, 2026

**Key Stats:**
- 19 optimized photos (60MB → 11MB)
- 14 relationship milestones
- 5-6x faster page load
- Fully responsive design
- Zero cropping issues

**Happy Valentine's Day! 💖**
