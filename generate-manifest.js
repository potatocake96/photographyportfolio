#!/usr/bin/env node

/**
 * Generate manifest.json for portfolio gallery
 * 
 * This script scans the image folders and creates a manifest file
 * that lists all images with their actual filenames (supports any names like DSC03331.jpg)
 * 
 * Usage: node generate-manifest.js
 */

const fs = require('fs');
const path = require('path');

// Configuration - match the categories in main.js
const CATEGORIES = ['weddings', 'black-and-white', 'street'];
const IMG_DIR = path.join(__dirname, 'assets', 'img');
const MANIFEST_PATH = path.join(IMG_DIR, 'manifest.json');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Get all image files from a directory
function getImagesInFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log(`⚠️  Folder not found: ${folderPath}`);
        return [];
    }
    
    const files = fs.readdirSync(folderPath);
    const images = [];
    
    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stat = fs.statSync(filePath);
        
        // Check if it's a file (not a directory) and has an image extension
        if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                // Store full filename with extension for direct use
                images.push(file);
            }
        }
    });
    
    // Sort filenames naturally (so DSC10 comes before DSC2)
    images.sort((a, b) => {
        // Try to extract numbers for natural sorting
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });
    
    return images;
}

// Generate manifest
function generateManifest() {
    console.log('📸 Generating image manifest...\n');
    
    const manifest = {};
    let totalImages = 0;
    
    CATEGORIES.forEach(category => {
        const categoryPath = path.join(IMG_DIR, category);
        const images = getImagesInFolder(categoryPath);
        
        manifest[category] = images;
        totalImages += images.length;
        
        console.log(`✅ ${category}: ${images.length} images`);
        if (images.length > 0) {
            console.log(`   Examples: ${images.slice(0, 3).join(', ')}${images.length > 3 ? '...' : ''}`);
        }
    });
    
    // Write manifest file
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    
    console.log(`\n✨ Manifest generated: ${MANIFEST_PATH}`);
    console.log(`📊 Total images: ${totalImages}`);
    console.log('\n💡 Tip: Run this script whenever you add new images to your folders!');
}

// Run
try {
    generateManifest();
} catch (error) {
    console.error('❌ Error generating manifest:', error.message);
    process.exit(1);
}

