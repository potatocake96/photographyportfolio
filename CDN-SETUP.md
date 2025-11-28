# CDN Setup Guide for Simon Dass Photography

## ✅ What's Been Done

1. **`.gitignore` created** - Images are now excluded from Git
2. **CDN support added** - Code now supports both local and CDN image paths
3. **Image README created** - Documentation in `assets/img/README.md`

## 🚀 Next Steps

### Step 1: Initialize Git (if not done)

```bash
cd "/Users/simondass/Documents/Cursor Projects/parallax test"
git init
git add .
git commit -m "Initial commit - portfolio website with CDN support"
```

The `.gitignore` will automatically exclude all images, keeping your repo small.

### Step 2: Set Up Cloudinary (Recommended CDN)

1. **Sign up**: Go to https://cloudinary.com and create a free account
2. **Get your Cloud Name**: After signing up, you'll see your Cloud Name in the dashboard (e.g., `dxyz1234`)
3. **Upload images**: 
   - Use the Media Library in Cloudinary dashboard
   - Create folders: `weddings/`, `black-and-white/`, `street/`, `events/`
   - Upload all your images to the corresponding folders
   - Keep the same filenames as in your `CONFIG.images`

### Step 3: Update CDN Configuration

Once images are uploaded to Cloudinary, update `assets/js/main.js`:

```javascript
const CONFIG = {
    // Change this line:
    cdnBaseUrl: '', // Leave empty for local development
    
    // To this (replace YOUR_CLOUD_NAME with your actual Cloud Name):
    cdnBaseUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload',
    
    // ... rest of config
};
```

### Step 4: Test Locally First

Before switching to CDN:
1. Keep `cdnBaseUrl: ''` (empty string)
2. Test your site locally - images should load from `assets/img/` folders
3. Once everything works, switch to CDN

### Step 5: Switch to Production (CDN)

1. Upload all images to Cloudinary
2. Update `cdnBaseUrl` in `main.js`
3. Test the site - images should now load from Cloudinary
4. Commit the change:
   ```bash
   git add assets/js/main.js
   git commit -m "Switch to Cloudinary CDN for images"
   ```

## 📦 Alternative CDN Options

If you prefer a different CDN:

### AWS S3 + CloudFront
```javascript
cdnBaseUrl: 'https://your-bucket-name.s3.amazonaws.com'
// or with CloudFront:
cdnBaseUrl: 'https://d1234567890.cloudfront.net'
```

### Imgix
```javascript
cdnBaseUrl: 'https://your-source.imgix.net'
```

### Your Own Server
```javascript
cdnBaseUrl: 'https://simondass.site/images'
```

## 🔄 Local Development Workflow

- **Development**: Keep `cdnBaseUrl: ''` and use local images
- **Production**: Set `cdnBaseUrl` to your CDN URL
- Images stay out of Git, keeping repo size small

## 📝 Notes

- The code automatically uses the correct path based on `cdnBaseUrl`
- If `cdnBaseUrl` is empty, it uses local paths (`assets/img/...`)
- If `cdnBaseUrl` is set, it uses CDN paths (`cdnBaseUrl/category/filename`)
- All image references are updated automatically via `CONFIG.getImagePath()`

## ✅ Benefits

- ✅ Small GitHub repository (no large image files)
- ✅ Fast Git operations
- ✅ Fast image loading via CDN
- ✅ Easy to switch between local and CDN
- ✅ Automatic image optimization (with Cloudinary)

---

**Questions?** Check `assets/img/README.md` for more details.

