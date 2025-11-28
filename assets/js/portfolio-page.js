// ============================================
// PORTFOLIO PAGE - Full Category Portfolio
// Loads all images from a specific category
// ============================================

// Import CONFIG from main.js (shared configuration)
// For portfolio pages, we'll define it here to avoid dependencies
const CONFIG = {
    cdnBaseUrl: 'https://res.cloudinary.com/dv9kzyowc/image/upload', // Cloudinary CDN for production
    
    getImagePath: function(category, filename) {
        if (this.cdnBaseUrl) {
            // Cloudinary URL structure: baseUrl/[version]/public_id.format
            // Public IDs don't include folder paths - they're just the filename
            let actualFilename;
            if (this.filenameMapping && this.filenameMapping[filename]) {
                // Mapped filename already doesn't have extension
                actualFilename = this.filenameMapping[filename];
            } else {
                // Remove extension from original filename for public_id
                actualFilename = filename.replace('.jpg', '');
            }
            
            // Add .jpg extension back for the URL
            return `${this.cdnBaseUrl}/${actualFilename}.jpg`;
        } else {
            // Local path: assets/img/category/filename
            return `assets/img/${category}/${filename}`;
        }
    },
    
    // Filename mapping: maps original filenames to actual Cloudinary filenames
    filenameMapping: {
        // Weddings
        'DSC00438.jpg': 'DSC00438_qlcu0d',
        'DSC00806.jpg': 'DSC00806_qg3qrb',
        'DSC00809.jpg': 'DSC00809_yvbofb',
        'DSC00811.jpg': 'DSC00811_dcehu1',
        'DSC00812.jpg': 'DSC00812_ergjfh',
        'DSC00867.jpg': 'DSC00867_derw01',
        'DSC00872.jpg': 'DSC00872_nqogpj',
        'DSC01420.jpg': 'DSC01420_cfikab',
        'DSC01432.jpg': 'DSC01432_ozedup',
        'A083761-R1-01-35A.jpg': 'A083761-R1-01-35A_njb56i',
        'A083761-R1-06-30A.jpg': 'A083761-R1-06-30A_jdxouf',
        'A083761-R1-14-22A.jpg': 'A083761-R1-14-22A_pantj3',
        'A083761-R1-23-12A.jpg': 'A083761-R1-23-12A_vl1vdu',
        'A083761-R1-25-10A.jpg': 'A083761-R1-25-10A_w7eyyp',
        'A083761-R1-27-8A.jpg': 'A083761-R1-27-8A_cqn0zi',
        
        // Black and White
        'Chr0015-R1-12-13.jpg': 'Chr0015-R1-12-13_w9asj0',
        'Chr0015-R1-13-14.jpg': 'Chr0015-R1-13-14_bb2e3d',
        'Chr0015-R1-15-16.jpg': 'Chr0015-R1-15-16_kdcc3o',
        'Chr0015-R1-22-23.jpg': 'Chr0015-R1-22-23_lpcww4',
        'Chr0015-R1-23-24.jpg': 'Chr0015-R1-23-24_yl7hid',
        'Chr0015-R1-35-36.jpg': 'Chr0015-R1-35-36_pctrov',
        'Chr0015-R1-36-37.jpg': 'Chr0015-R1-36-37_nlp7gy',
        'Chr0016-R1-18-19.jpg': 'Chr0016-R1-18-19_kesfsq',
        'Chr0016-R1-19-20.jpg': 'Chr0016-R1-19-20_hbvoo1',
        'Chr0016-R1-20-21.jpg': 'Chr0016-R1-20-21_natcgj',
        'Chr0016-R1-32-33.jpg': 'Chr0016-R1-32-33_jimyxt',
        '000026190011.jpg': '000026190011_nqi5op',
        '000026190012.jpg': '000026190012_wq7vly',
        '000026190026.jpg': '000026190026_rapkor',
        
        // Street
        'IMG_2297.jpg': 'IMG_2297_bn0qen',
        'DSC06063-positive.jpg': 'DSC06063-positive_t9mthl',
        'DSC06068-positive.jpg': 'DSC06068-positive_xjxczo',
        'DSC06177-positive.jpg': 'DSC06177-positive_lfjyda',
        'DSC06186-positive.jpg': 'DSC06186-positive_xdwibx',
        'DSC06776-positive.jpg': 'DSC06776-positive_fuhacy',
        'DSC06779-positive.jpg': 'DSC06779-positive_tu8ft4',
        'DSC06822-positive.jpg': 'DSC06822-positive_qjky64',
        'DSC07671-positive.jpg': 'DSC07671-positive_kiuzqg',
        'DSC07672-positive.jpg': 'DSC07672-positive_qiqfok',
        'DSC07675-positive.jpg': 'DSC07675-positive_zls5uz',
        'A090224-R1-13-14.jpg': 'A090224-R1-13-14_dckosw',
        'A091542-R1-15-21A.jpg': 'A091542-R1-15-21A_zdai6y',
        'A091544-R1-03-4.jpg': 'A091544-R1-03-4_d3nxrk',
        
        // Events
        'DSC03201.jpg': 'DSC03201_ejdsjs',
        'DSC03304.jpg': 'DSC03304_mmea74',
        'DSC03323.jpg': 'DSC03323_dk30j3',
        'DSC03337.jpg': 'DSC03337_r0bsdn',
        'DSC04279.jpg': 'DSC04279_rzca28',
        'DSC04290.jpg': 'DSC04290_knnv2b',
        'DSC04293.jpg': 'DSC04293_ekej7h',
        'DSC04352.jpg': 'DSC04352_skhbjq',
        'DSC04377.jpg': 'DSC04377_xyreyq',
        'DSC04393.jpg': 'DSC04393_mr62yz',
        'DSC04462.jpg': 'DSC04462_sgtd2g',
        'DSC04474.jpg': 'DSC04474_hibmzm',
        'DSC04498.jpg': 'DSC04498_jbudms',
        'DSC07852.jpg': 'DSC07852_u3zgpy',
        'DSC08673.jpg': 'DSC08673_welwx7',
        'DSC08711.jpg': 'DSC08711_typjki',
        'DSC08770.jpg': 'DSC08770_ntwa6r',
        'DSC08771.jpg': 'DSC08771_upf0aq',
        'DSC09120.jpg': 'DSC09120_m6ttn7',
        'DSC09224.jpg': 'DSC09224_ohyiq1',
        'DSC09231.jpg': 'DSC09231_jl0tyb',
        'DSC09422.jpg': 'DSC09422_cajelw',
        'DSC09466.jpg': 'DSC09466_u4kqyv',
        'LRG_DSC07851.jpg': 'LRG_DSC07851_ehxz7a'
    },
    
    images: {
        'weddings': [
            'DSC00438.jpg',
            'DSC00806.jpg',
            'DSC00809.jpg',
            'DSC00811.jpg',
            'DSC00812.jpg',
            'DSC00867.jpg',
            'DSC00872.jpg',
            'DSC01420.jpg',
            'DSC01432.jpg',
            'A083761-R1-01-35A.jpg',
            'A083761-R1-06-30A.jpg',
            'A083761-R1-14-22A.jpg',
            'A083761-R1-23-12A.jpg',
            'A083761-R1-25-10A.jpg',
            'A083761-R1-27-8A.jpg'
        ],
        'black-and-white': [
            'Chr0015-R1-12-13.jpg',
            'Chr0015-R1-13-14.jpg',
            'Chr0015-R1-15-16.jpg',
            'Chr0015-R1-22-23.jpg',
            'Chr0015-R1-23-24.jpg',
            'Chr0015-R1-35-36.jpg',
            'Chr0015-R1-36-37.jpg',
            'Chr0016-R1-18-19.jpg',
            'Chr0016-R1-19-20.jpg',
            'Chr0016-R1-20-21.jpg',
            'Chr0016-R1-32-33.jpg',
            '000026190011.jpg',
            '000026190012.jpg',
            '000026190026.jpg'
        ],
        'street': [
            'IMG_2297.jpg',
            'DSC06063-positive.jpg',
            'DSC06068-positive.jpg',
            'DSC06177-positive.jpg',
            'DSC06186-positive.jpg',
            'DSC06776-positive.jpg',
            'DSC06779-positive.jpg',
            'DSC06822-positive.jpg',
            'DSC07671-positive.jpg',
            'DSC07672-positive.jpg',
            'DSC07675-positive.jpg',
            'A090224-R1-13-14.jpg',
            'A091542-R1-15-21A.jpg',
            'A091544-R1-03-4.jpg'
        ],
        'events': [
            'DSC03201.jpg',
            'DSC03304.jpg',
            'DSC03323.jpg',
            'DSC03337.jpg',
            'DSC04279.jpg',
            'DSC04290.jpg',
            'DSC04293.jpg',
            'DSC04352.jpg',
            'DSC04377.jpg',
            'DSC04393.jpg',
            'DSC04462.jpg',
            'DSC04474.jpg',
            'DSC04498.jpg',
            'DSC07852.jpg',
            'DSC08673.jpg',
            'DSC08711.jpg',
            'DSC08770.jpg',
            'DSC08771.jpg',
            'DSC09120.jpg',
            'DSC09224.jpg',
            'DSC09231.jpg',
            'DSC09422.jpg',
            'DSC09466.jpg',
            'LRG_DSC07851.jpg'
        ]
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    initPortfolioPage();
    initLightbox();
    initFooter();
});

// ============================================
// PORTFOLIO PAGE INITIALIZATION
// ============================================
function initPortfolioPage() {
    // Get category from filename
    const filename = window.location.pathname.split('/').pop();
    let category = '';
    
    if (filename.includes('weddings')) {
        category = 'weddings';
    } else if (filename.includes('black-and-white')) {
        category = 'black-and-white';
    } else if (filename.includes('street')) {
        category = 'street';
    } else if (filename.includes('events')) {
        category = 'events';
    }
    
    if (!category || !CONFIG.images[category]) {
        console.error('Category not found');
        return;
    }
    
    // Load images for this category
    const portfolioGrid = document.getElementById('portfolioGridFull');
    if (!portfolioGrid) return;
    
    const images = CONFIG.images[category].map(filename => ({
        path: CONFIG.getImagePath(category, filename),
        category: category,
        alt: `${category} photography - ${filename.replace(/\.[^.]+$/, '')}`
    }));
    
    // Render images
    renderPortfolioImages(images, portfolioGrid);
}

// ============================================
// RENDER PORTFOLIO IMAGES - REBUILT
// ============================================
function renderPortfolioImages(images, grid) {
    grid.innerHTML = '';
    
    // Grid is set up via CSS with grid-auto-rows: 250px
    
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item-full'; // Only use portfolio-item-full, not both
        item.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = image.path;
        img.alt = image.alt;
        img.loading = 'lazy';
        
        // Detect image orientation and apply appropriate class
        img.onload = function() {
            const isPortrait = this.naturalHeight > this.naturalWidth;
            const isSquare = Math.abs(this.naturalHeight - this.naturalWidth) < 50;
            
            if (isSquare) {
                item.classList.add('orientation-square');
            } else if (isPortrait) {
                item.classList.add('orientation-portrait');
            } else {
                item.classList.add('orientation-landscape');
            }
        };
        
        // Handle image load errors
        let retryCount = 0;
        img.onerror = function() {
            retryCount++;
            const currentSrc = this.src;
            
            if (retryCount === 1) {
                // Try without the Cloudinary suffix
                if (currentSrc.includes('_')) {
                    const altSrc = currentSrc.replace(/_[a-zA-Z0-9]+\.jpg$/, '.jpg');
                    if (altSrc !== currentSrc) {
                        this.src = altSrc;
                        return;
                    }
                }
            } else if (retryCount === 2) {
                // Try with lowercase suffix
                if (currentSrc.includes('_Ifjyda')) {
                    this.src = currentSrc.replace('_Ifjyda', '_ifjyda');
                    return;
                }
            } else {
                console.warn('Failed to load image:', currentSrc);
                item.style.display = 'none';
            }
        };
        
        item.appendChild(img);
        item.addEventListener('click', () => {
            openLightbox(index, images);
        });
        
        grid.appendChild(item);
    });
    
    // Simple fade-in animation
    const items = grid.querySelectorAll('.portfolio-item-full');
    if (items.length > 0) {
        gsap.set(items, { opacity: 0, y: 20 });
        
        gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.05,
            scrollTrigger: {
                trigger: grid,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    }
}

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateLightbox(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateLightbox(1));
    }
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });
}

function openLightbox(index, images) {
    currentLightboxIndex = index;
    currentLightboxImages = images;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = images[index].path;
        lightboxImage.alt = images[index].alt;
        
        if (lightboxCaption) {
            lightboxCaption.textContent = `${index + 1} / ${images.length}`;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Fade in
        gsap.fromTo(lightbox, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo(lightboxImage,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        gsap.to(lightbox, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

function navigateLightbox(direction) {
    if (currentLightboxImages.length === 0) return;
    
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxImages.length - 1;
    } else if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    if (lightboxImage) {
        gsap.to(lightboxImage, {
            opacity: 0,
            scale: 0.9,
            duration: 0.2,
            onComplete: () => {
                lightboxImage.src = currentLightboxImages[currentLightboxIndex].path;
                lightboxImage.alt = currentLightboxImages[currentLightboxIndex].alt;
                
                if (lightboxCaption) {
                    lightboxCaption.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
                }
                
                gsap.to(lightboxImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }
}

// ============================================
// FOOTER
// ============================================
function initFooter() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

