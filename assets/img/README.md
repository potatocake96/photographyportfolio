# Image Assets

This folder contains placeholder structure for portfolio images.

## Image Hosting

Images are hosted on a CDN (Cloudinary) for optimal performance and to keep the GitHub repository size manageable.

## Folder Structure

- `weddings/` - Wedding photography images
- `black-and-white/` - Black and white photography
- `street/` - Street photography
- `events/` - Event photography
- `portrait.jpg` - Photographer portrait (in root of assets/img/)

## Local Development

For local development, place images in the respective folders. 
The code will use local paths when `CONFIG.cdnBaseUrl` is empty in `assets/js/main.js`.

## Production Setup

1. **Sign up for Cloudinary** (free tier available): https://cloudinary.com
2. **Upload your images** to Cloudinary, organizing them in folders:
   - `weddings/`
   - `black-and-white/`
   - `street/`
   - `events/`
3. **Get your Cloud Name** from the Cloudinary dashboard
4. **Update `CONFIG.cdnBaseUrl`** in `assets/js/main.js`:
   ```javascript
   cdnBaseUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload',
   ```

## Image Naming

Keep the same filenames as listed in `CONFIG.images` in `assets/js/main.js` to ensure proper loading.

## Git

Images in this folder are excluded from Git via `.gitignore` to keep the repository size small.

