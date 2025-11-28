# Simon Dass Photography - 3D Parallax Portfolio

A premium, cinematic photography portfolio website featuring 3D parallax scrolling, layered elements, and smooth animations.

## 🎨 Features

- **3D Parallax Effects**: Layered hero section with depth and perspective
- **GSAP Animations**: Smooth scroll-triggered animations using GSAP + ScrollTrigger
- **Filterable Gallery**: Portfolio gallery with category filtering (Weddings, Black & White, Street)
- **Lightbox Viewer**: Full-screen image viewer with keyboard navigation
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, throttled scroll events, reduced motion support

## 📁 Folder Structure

```
/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── weddings/
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   └── ...
│       ├── black-and-white/
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   └── ...
│       ├── street/
│       │   ├── 1.jpg
│       │   ├── 2.jpg
│       │   └── ...
│       └── common/
│           └── portrait.jpg
└── README.md
```

## 🖼️ Adding Images

### Supports Any Filenames!

**The gallery supports images with ANY filenames** - like `DSC03331.jpg`, `IMG_2023_1234.jpg`, `wedding-sunset.jpg`, or whatever you have! No renaming needed.

### Quick Start (2 Steps)

1. **Add your images** to the category folders:
   - Wedding photos → `assets/img/weddings/`
   - Black & white photos → `assets/img/black-and-white/`
   - Street photos → `assets/img/street/`
   
   **Keep your original filenames** - no need to rename them!

2. **Generate the manifest**:
   ```bash
   node generate-manifest.js
   ```

3. **Refresh the page** - all your images will appear!

### Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### How It Works

The gallery uses a `manifest.json` file that lists all your images. The `generate-manifest.js` script automatically scans your folders and creates this file with all your actual filenames.

**Example manifest:**
```json
{
  "weddings": ["DSC03331", "DSC03345", "IMG_2023_001"],
  "black-and-white": ["BW_001", "film_roll_12"],
  "street": ["street_photo_1", "NYC_2023"]
}
```

### When to Regenerate the Manifest

Run `node generate-manifest.js` whenever you:
- Add new images to any folder
- Delete images
- Rename images

### Fallback Mode

If the manifest file doesn't exist, the gallery will fall back to trying numbered files (`1.jpg`, `2.jpg`, etc.) - but the manifest approach is recommended for random filenames.

### Adding a New Category

1. Create a new folder: `assets/img/your-category/`
2. Add images to the folder (any filenames!)
3. Update `CONFIG.categories` in `assets/js/main.js`:
   ```javascript
   categories: ['weddings', 'black-and-white', 'street', 'your-category']
   ```
4. Add a filter button in `index.html`:
   ```html
   <button class="filter-btn" data-filter="your-category">Your Category</button>
   ```
5. Run `node generate-manifest.js` to update the manifest

## ⚙️ Customization

### Changing Business Name

1. **In `index.html`**: Replace "Simon Dass Photography" with your name
2. **In `index.html`**: Update the `<title>` tag
3. **In `assets/css/style.css`**: Search for "Simon Dass" and replace

### Adjusting Parallax Speed

Edit `assets/js/main.js`:

```javascript
const CONFIG = {
    parallaxSpeed: {
        hero: 0.5,      // Higher = faster (0.1 to 1.0 recommended)
        about: 0.3,     // About section parallax
        services: 0.2   // Services cards parallax
    }
};
```

Or adjust individual layer speeds in `index.html`:
```html
<div class="hero-layer hero-layer-1" data-speed="0.3">
```

### Changing Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --color-bg: #f5f1eb;           /* Background color */
    --color-accent: #c41e3a;       /* Accent color (buttons, links) */
    --color-text: #2c2c2c;         /* Main text color */
    /* ... more variables */
}
```

### Adjusting GSAP Animation Settings

In `assets/js/main.js`, modify the `scrollTrigger` config:

```javascript
scrollTrigger: {
    start: 'top bottom',    // When animation starts
    end: 'bottom top',      // When animation ends
    scrub: 1,               // Smoothness (1 = smooth, true = instant)
    markers: false          // Set to true to see trigger points
}
```

### Updating Contact Email

In `assets/js/main.js`, find the `initContactForm` function and update:

```javascript
const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
```

Replace `your-email@example.com` with your actual email address.

## 🚀 Getting Started

1. **Open `index.html`** in a web browser
2. **Add your images** to the category folders (see "Adding Images" above)
3. **Update image counts** in `assets/js/main.js`
4. **Customize** business name, colors, and content
5. **Test** on different devices and browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

- **Optimize images**: Use compressed JPG files (recommended: 80-90% quality)
- **Image dimensions**: Aim for 1200-2000px width for portfolio images
- **Lazy loading**: Already implemented - images load as you scroll
- **Reduced motion**: Respects `prefers-reduced-motion` for accessibility

## 🐛 Troubleshooting

### Images not showing?
- Check file names match exactly: `1.jpg`, `2.jpg`, etc. (case-sensitive)
- Verify image count in `CONFIG.imageCounts` matches your actual files
- Check browser console for 404 errors

### Parallax not working?
- Ensure GSAP and ScrollTrigger are loading (check browser console)
- Verify `data-speed` attributes are set on parallax elements
- Check that `scrub` value in ScrollTrigger config is set (not `false`)

### Mobile menu not working?
- Check that JavaScript is enabled
- Verify `nav-toggle` button exists in HTML

## 📝 Notes

- The site uses **GSAP 3.12.5** loaded from CDN
- All animations respect `prefers-reduced-motion` for accessibility
- Form submission uses `mailto:` as a fallback (consider adding a backend later)
- Images are lazy-loaded for better performance

## 🔄 Future Enhancements

Consider adding:
- Backend form handling (replace mailto)
- Image optimization service
- Blog section
- Client gallery with password protection
- Booking calendar integration

---

**Built with**: HTML5, CSS3, JavaScript (ES6+), GSAP 3.12.5

**License**: All rights reserved - Simon Dass Photography

