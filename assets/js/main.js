/* ============================================
   SIMON DASS PHOTOGRAPHY - MAIN JAVASCRIPT
   Premium 3D Parallax Portfolio
   ============================================ */

// ============================================
// CONFIGURATION
// Easy to customize: add more images or adjust settings
// ============================================

const CONFIG = {
    // CDN Configuration
    // Set to your CDN base URL, or leave empty string for local images
    // Example: 'https://res.cloudinary.com/your-cloud-name/image/upload'
    // Example: 'https://your-cdn.com'
    cdnBaseUrl: 'https://res.cloudinary.com/dv9kzyowc/image/upload', // Cloudinary CDN for production
    
    // Helper function to build image paths
    getImagePath: function(category, filename) {
        if (this.cdnBaseUrl) {
            // Cloudinary URL structure: baseUrl/[version]/public_id.format
            // Public IDs don't include folder paths - they're just the filename
            // Cloudinary automatically adds version numbers, but we can omit them
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
    // Cloudinary appended unique identifiers to prevent filename conflicts
    // Note: Cloudinary public_ids don't include file extensions
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
    
    // Curated portfolio selection (featured images for main page)
    // Limited to 12-16 images total for better performance and focus
    curatedImages: {
        'weddings': [
            'DSC00438.jpg',
            'DSC00806.jpg',
            'DSC00811.jpg',
            'DSC01420.jpg'
        ],
        'black-and-white': [
            'Chr0015-R1-12-13.jpg',
            'Chr0015-R1-23-24.jpg',
            'Chr0016-R1-20-21.jpg',
            '000026190011.jpg'
        ],
        'street': [
            'IMG_2297.jpg',
            'DSC06063-positive.jpg',
            'DSC06177-positive.jpg',
            'DSC07671-positive.jpg'
        ],
        'events': [
            'DSC03201.jpg',
            'DSC03323.jpg',
            'DSC04352.jpg',
            'DSC07852.jpg'
        ]
    },
    
    // Full image lists for separate portfolio pages
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
    },
    
    // Parallax speed multipliers
    // Higher values = faster movement
    parallaxSpeed: {
        hero: 0.5,      // Hero section parallax intensity
        about: 0.3,     // About section parallax intensity
        services: 0.2   // Services section parallax intensity
    },
    
    // GSAP ScrollTrigger settings
    scrollTrigger: {
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,  // Smooth scrubbing (1 = smooth, true = instant)
        markers: false // Set to true for debugging
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initAnimatedText();
    initGSAP();
    initNavigation();
    initSidebar();
    initPortfolio();
    initLightbox();
    initFooter();
    initHeroImageCycle();
    initCircularText();
    initTestimonials();
    initContactEmail();
});

// ============================================
// ANIMATED TEXT EFFECTS
// ============================================
function initAnimatedText() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    const title = document.getElementById('animatedTitle');
    if (title) {
        // Split text into letters for animation
        const text = title.textContent;
        title.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            title.appendChild(span);
        });
        
        // Animate letters on load
        gsap.fromTo(title.children,
            {
                opacity: 0,
                y: 50,
                rotationX: -90
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
                stagger: 0.05,
                delay: 0.3
            }
        );
    }
}

// ============================================
// CIRCULAR TEXT ANIMATION
// ============================================
function initCircularText() {
    const circularText = document.getElementById('circularText');
    if (circularText) {
        gsap.to(circularText, {
            rotation: 360,
            duration: 20,
            ease: 'none',
            repeat: -1
        });
    }
}

// ============================================
// HERO IMAGE CYCLING - SINGLE OR MULTIPLE PORTRAITS
// ============================================
function initHeroImageCycle() {
    const heroImage1 = document.getElementById('heroImage1');
    const heroImage2 = document.getElementById('heroImage2');
    const heroImage3 = document.getElementById('heroImage3');
    const layer1 = document.querySelector('.hero-layer-1');
    const layer2 = document.querySelector('.hero-layer-2');
    const layer3 = document.querySelector('.hero-layer-3');
    
    if (!heroImage1) return;
    
    // Check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Collect ALL images from all categories (use full images list for hero)
    const allImages = [];
    Object.keys(CONFIG.images).forEach(category => {
        CONFIG.images[category].forEach(filename => {
            allImages.push(CONFIG.getImagePath(category, filename));
        });
    });
    
    if (allImages.length === 0) return;
    
    // Shuffle array for random order
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    // Detect if image is portrait
    function detectOrientation(src, callback) {
        const img = new Image();
        img.onload = function() {
            const isPortrait = this.height > this.width;
            callback(isPortrait, this.width, this.height);
        };
        img.onerror = () => callback(false, 0, 0);
        img.src = src;
    }
    
    // Preload image
    function preloadImage(src) {
        const img = new Image();
        img.src = src;
        return img;
    }
    
    // Store animation timelines for cleanup
    const imageAnimations = new Map();
    
    // Add subtle continuous movement to images
    function animateImageMovement(imgElement, options = {}) {
        // Kill any existing animation on this element
        if (imageAnimations.has(imgElement)) {
            imageAnimations.get(imgElement).kill();
        }
        
        const intensity = options.intensity || 0.015; // Movement intensity (percentage)
        const speed = options.speed || 8; // Animation duration in seconds
        const delay = options.delay || 0;
        
        // Create a timeline with continuous subtle movement
        const tl = gsap.timeline({ 
            repeat: -1, 
            yoyo: true,
            ease: 'sine.inOut',
            delay: delay
        });
        
        // Random starting position for variety
        const startX = (Math.random() - 0.5) * intensity * 100;
        const startY = (Math.random() - 0.5) * intensity * 100;
        const endX = -startX;
        const endY = -startY;
        
        // Set initial position
        gsap.set(imgElement, { 
            x: startX + '%', 
            y: startY + '%',
            transformOrigin: 'center center'
        });
        
        // Animate to end position
        tl.to(imgElement, {
            x: endX + '%',
            y: endY + '%',
            duration: speed,
            ease: 'sine.inOut'
        });
        
        // Store timeline for cleanup
        imageAnimations.set(imgElement, tl);
    }
    
    // Stop all image animations
    function stopAllImageAnimations() {
        imageAnimations.forEach((tl) => tl.kill());
        imageAnimations.clear();
    }
    
    let shuffledImages = shuffleArray(allImages);
    let currentIndex = 0;
    let isShowingPortraits = false;
    let isShowingLandscapes = false;
    
    // Load initial image
    function loadInitialImage() {
        const firstImage = shuffledImages[0];
        detectOrientation(firstImage, (isPortrait) => {
            if (isMobile()) {
                // Mobile: Inverted rules
                if (isPortrait) {
                    // Show single portrait
                    showSinglePortraitMobile(firstImage);
                } else {
                    // Show 2-3 landscape images stacked vertically
                    showLandscapeStackMobile([
                        firstImage, 
                        shuffledImages[1] || firstImage, 
                        shuffledImages[2] || firstImage
                    ].slice(0, 3));
                }
            } else {
                // Desktop: Original rules
                if (isPortrait) {
                    // Show 2-3 portrait images
                    showPortraitImages([firstImage, shuffledImages[1] || firstImage, shuffledImages[2] || firstImage].slice(0, 3));
                } else {
                    // Show single landscape
                    showSingleImage(firstImage);
                }
            }
        });
    }
    
    // Show single landscape image (desktop)
    function showSingleImage(src) {
        isShowingPortraits = false;
        isShowingLandscapes = false;
        layer1.classList.remove('portrait-1', 'portrait-2', 'portrait-3', 'landscape-1', 'landscape-2', 'landscape-3');
        layer1.classList.add('single-image');
        layer2.style.display = 'none';
        layer3.style.display = 'none';
        
        // Set initial state for smooth crossfade
        gsap.set(heroImage1, { opacity: 0, scale: 1.05 });
        heroImage1.src = src;
        
        // Smooth fade in with slight scale animation
        gsap.to(heroImage1, { 
            opacity: 1, 
            scale: 1,
            duration: 1.5, 
            ease: 'power2.out'
        });
        
        // Add subtle continuous movement
        animateImageMovement(heroImage1, { intensity: 0.02, speed: 8 });
    }
    
    // Show single portrait image (mobile)
    function showSinglePortraitMobile(src) {
        isShowingPortraits = true;
        isShowingLandscapes = false;
        layer1.classList.remove('portrait-1', 'portrait-2', 'portrait-3', 'landscape-1', 'landscape-2', 'landscape-3', 'single-image');
        layer1.classList.add('portrait-single-mobile');
        layer2.style.display = 'none';
        layer3.style.display = 'none';
        
        // Set initial state for smooth crossfade
        gsap.set(heroImage1, { opacity: 0, scale: 1.05 });
        heroImage1.src = src;
        
        // Smooth fade in with slight scale animation
        gsap.to(heroImage1, { 
            opacity: 1, 
            scale: 1,
            duration: 1.5, 
            ease: 'power2.out'
        });
        
        // Add subtle continuous movement
        animateImageMovement(heroImage1, { intensity: 0.015, speed: 10 });
    }
    
    // Show 2-3 portrait images side by side (desktop)
    function showPortraitImages(sources) {
        isShowingPortraits = true;
        isShowingLandscapes = false;
        layer1.classList.remove('single-image', 'landscape-1', 'landscape-2', 'landscape-3', 'portrait-single-mobile');
        layer1.classList.add('portrait-1');
        layer2.classList.remove('single-image', 'landscape-1', 'landscape-2', 'landscape-3');
        layer2.classList.add('portrait-2');
        layer3.classList.remove('single-image', 'landscape-1', 'landscape-2', 'landscape-3');
        layer3.classList.add('portrait-3');
        
        // Set initial states for smooth crossfade
        gsap.set([heroImage1, heroImage2, heroImage3], { opacity: 0, scale: 1.05 });
        
        // Show layers based on number of images
        if (sources.length >= 2) {
            layer2.style.display = 'block';
            heroImage2.src = sources[1];
            gsap.to(heroImage2, { 
                opacity: 1, 
                scale: 1,
                duration: 1.5, 
                ease: 'power2.out',
                delay: 0.15 
            });
            animateImageMovement(heroImage2, { intensity: 0.018, speed: 7, delay: 0.5 });
        }
        if (sources.length >= 3) {
            layer3.style.display = 'block';
            heroImage3.src = sources[2];
            gsap.to(heroImage3, { 
                opacity: 1, 
                scale: 1,
                duration: 1.5, 
                ease: 'power2.out',
                delay: 0.3 
            });
            animateImageMovement(heroImage3, { intensity: 0.02, speed: 9, delay: 0.7 });
        }
        
        heroImage1.src = sources[0];
        gsap.to(heroImage1, { 
            opacity: 1, 
            scale: 1,
            duration: 1.5, 
            ease: 'power2.out'
        });
        animateImageMovement(heroImage1, { intensity: 0.015, speed: 8 });
    }
    
    // Show 2-3 landscape images stacked vertically (mobile)
    function showLandscapeStackMobile(sources) {
        isShowingLandscapes = true;
        isShowingPortraits = false;
        layer1.classList.remove('single-image', 'portrait-1', 'portrait-2', 'portrait-3', 'portrait-single-mobile');
        layer1.classList.add('landscape-1');
        layer2.classList.remove('single-image', 'portrait-1', 'portrait-2', 'portrait-3', 'portrait-single-mobile');
        layer2.classList.add('landscape-2');
        layer3.classList.remove('single-image', 'portrait-1', 'portrait-2', 'portrait-3', 'portrait-single-mobile');
        layer3.classList.add('landscape-3');
        
        // Set initial states for smooth crossfade
        gsap.set([heroImage1, heroImage2, heroImage3], { opacity: 0, scale: 1.03 });
        
        // Show layers based on number of images
        if (sources.length >= 2) {
            layer2.style.display = 'block';
            heroImage2.src = sources[1];
            gsap.to(heroImage2, { 
                opacity: 1, 
                scale: 1,
                duration: 1.5, 
                ease: 'power2.out',
                delay: 0.15 
            });
            animateImageMovement(heroImage2, { intensity: 0.012, speed: 9, delay: 0.5 });
        }
        if (sources.length >= 3) {
            layer3.style.display = 'block';
            heroImage3.src = sources[2];
            gsap.to(heroImage3, { 
                opacity: 1, 
                scale: 1,
                duration: 1.5, 
                ease: 'power2.out',
                delay: 0.3 
            });
            animateImageMovement(heroImage3, { intensity: 0.015, speed: 10, delay: 0.7 });
        }
        
        heroImage1.src = sources[0];
        gsap.to(heroImage1, { 
            opacity: 1, 
            scale: 1,
            duration: 1.5, 
            ease: 'power2.out'
        });
        animateImageMovement(heroImage1, { intensity: 0.01, speed: 8 });
    }
    
    // Cycle to next image(s)
    function cycleToNextImage() {
        currentIndex = (currentIndex + 1) % shuffledImages.length;
        
        if (currentIndex === 0) {
            shuffledImages = shuffleArray(allImages);
        }
        
        const nextImage = shuffledImages[currentIndex];
        
        // Preload next few
        for (let i = 1; i <= 3; i++) {
            const preloadIndex = (currentIndex + i) % shuffledImages.length;
            preloadImage(shuffledImages[preloadIndex]);
        }
        
        detectOrientation(nextImage, (isPortrait) => {
            if (isMobile()) {
                // Mobile: Inverted rules
                if (isPortrait) {
                    // Show single portrait
                    if (isShowingLandscapes) {
                        // Switch from landscape stack to single portrait
                        stopAllImageAnimations();
                        gsap.to([heroImage1, heroImage2, heroImage3], {
                            opacity: 0,
                            scale: 0.98,
                            duration: 1.2,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                showSinglePortraitMobile(nextImage);
                            }
                        });
                    } else {
                        // Update single portrait - smooth crossfade
                        const currentSrc = heroImage1.src;
                        gsap.to(heroImage1, {
                            opacity: 0,
                            scale: 0.98,
                            duration: 1.2,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                showSinglePortraitMobile(nextImage);
                            }
                        });
                    }
                } else {
                    // Show landscape stack
                    const landscapeImages = [
                        nextImage,
                        shuffledImages[(currentIndex + 1) % shuffledImages.length],
                        shuffledImages[(currentIndex + 2) % shuffledImages.length]
                    ];
                    
                    if (isShowingPortraits) {
                        // Switch from single portrait to landscape stack
                        stopAllImageAnimations();
                        gsap.to(heroImage1, {
                            opacity: 0,
                            scale: 0.98,
                            duration: 1.2,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                showLandscapeStackMobile(landscapeImages);
                            }
                        });
                    } else {
                        // Update landscape stack
                        stopAllImageAnimations();
                        gsap.to([heroImage1, heroImage2, heroImage3], {
                            opacity: 0,
                            scale: 0.98,
                            duration: 1.2,
                            ease: 'power2.inOut',
                            onComplete: () => {
                                showLandscapeStackMobile(landscapeImages);
                            }
                        });
                    }
                }
            } else {
                // Desktop: Original rules
                if (isPortrait && !isShowingPortraits) {
                    // Switch to portrait mode
                    const portraitImages = [
                        nextImage,
                        shuffledImages[(currentIndex + 1) % shuffledImages.length],
                        shuffledImages[(currentIndex + 2) % shuffledImages.length]
                    ];
                    
                    // Smooth fade out
                    stopAllImageAnimations();
                    gsap.to([heroImage1, heroImage2, heroImage3], {
                        opacity: 0,
                        scale: 0.98,
                        duration: 1.2,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            showPortraitImages(portraitImages);
                        }
                    });
                } else if (!isPortrait && isShowingPortraits) {
                    // Switch to single image mode
                    stopAllImageAnimations();
                    gsap.to([heroImage1, heroImage2, heroImage3], {
                        opacity: 0,
                        scale: 0.98,
                        duration: 1.2,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            showSingleImage(nextImage);
                        }
                    });
                } else if (isPortrait && isShowingPortraits) {
                    // Update portrait images - smooth crossfade
                    const portraitImages = [
                        nextImage,
                        shuffledImages[(currentIndex + 1) % shuffledImages.length],
                        shuffledImages[(currentIndex + 2) % shuffledImages.length]
                    ];
                    
                    stopAllImageAnimations();
                    gsap.to([heroImage1, heroImage2, heroImage3], {
                        opacity: 0,
                        scale: 0.98,
                        duration: 1.2,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            showPortraitImages(portraitImages);
                        }
                    });
                } else {
                    // Update single landscape - smooth crossfade
                    stopAllImageAnimations();
                    gsap.to(heroImage1, {
                        opacity: 0,
                        scale: 0.98,
                        duration: 1.2,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            // Set new image with initial state
                            gsap.set(heroImage1, { opacity: 0, scale: 1.05 });
                            heroImage1.src = nextImage;
                            // Smooth fade in
                            gsap.to(heroImage1, { 
                                opacity: 1, 
                                scale: 1,
                                duration: 1.5, 
                                ease: 'power2.out'
                            });
                            animateImageMovement(heroImage1, { intensity: 0.02, speed: 8 });
                        }
                    });
                }
            }
        });
        
        // Schedule next transition
        const nextDelay = 4000 + Math.random() * 2000;
        setTimeout(cycleToNextImage, nextDelay);
    }
    
    // Handle window resize to update display mode
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reload current image with correct mode for new screen size
            const currentImage = shuffledImages[currentIndex];
            if (currentImage) {
                detectOrientation(currentImage, (isPortrait) => {
                    if (isMobile()) {
                        if (isPortrait) {
                            showSinglePortraitMobile(currentImage);
                        } else {
                            const landscapeImages = [
                                currentImage,
                                shuffledImages[(currentIndex + 1) % shuffledImages.length],
                                shuffledImages[(currentIndex + 2) % shuffledImages.length]
                            ];
                            showLandscapeStackMobile(landscapeImages);
                        }
                    } else {
                        if (isPortrait) {
                            const portraitImages = [
                                currentImage,
                                shuffledImages[(currentIndex + 1) % shuffledImages.length],
                                shuffledImages[(currentIndex + 2) % shuffledImages.length]
                            ];
                            showPortraitImages(portraitImages);
                        } else {
                            showSingleImage(currentImage);
                        }
                    }
                });
            }
        }, 250);
    });
    
    // Initialize
    loadInitialImage();
    shuffledImages.slice(0, 5).forEach(src => preloadImage(src));
    
    // Start cycling
    setTimeout(cycleToNextImage, 5000);
}

// ============================================
// GSAP & SCROLLTRIGGER SETUP
// Handles all parallax and scroll animations
// ============================================
function initGSAP() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section parallax
    const heroLayer = document.querySelector('.hero-image-layer');
    if (heroLayer) {
        const speed = parseFloat(heroLayer.dataset.speed) || CONFIG.parallaxSpeed.hero;
        
        gsap.to(heroLayer, {
            y: `${50 * speed}%`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: CONFIG.scrollTrigger.scrub,
                markers: CONFIG.scrollTrigger.markers
            }
        });
    }
    
    // Hero CTA panel parallax
    const ctaPanel = document.querySelector('.hero-cta-panel');
    if (ctaPanel) {
        gsap.to(ctaPanel, {
            y: -50,
            opacity: 0.8,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }
    
        // Portfolio section parallax - images and text interweave (only if items exist)
    function initPortfolioParallax() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        if (portfolioItems.length > 0) {
            portfolioItems.forEach((item, index) => {
                // More dynamic parallax for playful layout
                const speed = 0.15 + (index % 4) * 0.1;
                const direction = index % 2 === 0 ? 1 : -1;
                const baseRotation = parseFloat(item.dataset.rotation) || 0;
                
                // Enhanced parallax with rotation interplay
                gsap.to(item, {
                    y: `${35 * speed * direction}%`,
                    x: `${15 * speed * (index % 3 === 0 ? 1 : -1)}%`,
                    rotation: baseRotation + (index % 2 === 0 ? 1.5 : -1.5) * speed,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: CONFIG.scrollTrigger.scrub,
                        markers: CONFIG.scrollTrigger.markers
                    }
                });
                
                // Add hover interaction with nearby text overlays
                item.addEventListener('mouseenter', () => {
                    // Find nearby overlay items and enhance them
                    const overlayItems = document.querySelectorAll('.portfolio-overlay-item');
                    overlayItems.forEach(overlay => {
                        const itemRect = item.getBoundingClientRect();
                        const overlayRect = overlay.getBoundingClientRect();
                        const distance = Math.sqrt(
                            Math.pow(itemRect.left - overlayRect.left, 2) + 
                            Math.pow(itemRect.top - overlayRect.top, 2)
                        );
                        
                        if (distance < 400) {
                            gsap.to(overlay, {
                                scale: 1.05,
                                opacity: 1,
                                duration: 0.3,
                                ease: 'power2.out'
                            });
                        }
                    });
                });
                
                item.addEventListener('mouseleave', () => {
                    const overlayItems = document.querySelectorAll('.portfolio-overlay-item');
                    overlayItems.forEach(overlay => {
                        gsap.to(overlay, {
                            scale: 1,
                            opacity: 0.95,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                });
            });
        }
        
        // Portfolio text descriptions with parallax - different speeds create interweaving
        const portfolioTexts = document.querySelectorAll('.portfolio-text');
        if (portfolioTexts.length > 0) {
            portfolioTexts.forEach((text, index) => {
                const speed = parseFloat(text.dataset.speed) || 0.4;
                
                // Text moves in opposite direction or different speed than images
                const direction = index % 2 === 0 ? 1 : -1;
                
                // Initial state - hidden
                gsap.set(text, { opacity: 0, y: 20 });
                
                // Animate in on scroll - more subtle
                gsap.to(text, {
                    opacity: 0.4,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        markers: CONFIG.scrollTrigger.markers
                    }
                });
                
                // Subtle parallax movement
                gsap.to(text, {
                    y: `${30 * speed * direction}%`,
                    x: `${12 * speed * (index % 2 === 0 ? 1 : -1)}%`,
                    rotation: (index % 2 === 0 ? 1 : -1) * speed,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: CONFIG.scrollTrigger.scrub,
                        markers: CONFIG.scrollTrigger.markers
                    }
                });
            });
        }
        
        // Portfolio overlay items (testimonials & details) with parallax
        const overlayItems = document.querySelectorAll('.portfolio-overlay-item');
        if (overlayItems.length > 0) {
            overlayItems.forEach((item, index) => {
                const speed = parseFloat(item.dataset.speed) || 0.4;
                const type = item.dataset.type;
                
                // Different movement patterns for testimonials vs details
                const direction = index % 2 === 0 ? 1 : -1;
                const xDirection = index % 3 === 0 ? 1 : -1;
                
                // Get initial rotation from CSS transform or data attribute
                const initialRotation = item.style.transform 
                    ? parseFloat(item.style.transform.match(/rotate\(([^)]+deg)\)/)?.[1]) || 0
                    : 0;
                
                // Initial state - hidden and slightly offset
                gsap.set(item, { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.95,
                    rotation: initialRotation
                });
                
                // Animate in on scroll with stagger
                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                        markers: CONFIG.scrollTrigger.markers
                    }
                });
                
                // Subtle parallax movement - less chaotic
                gsap.to(item, {
                    y: `${40 * speed * direction}%`,
                    x: `${20 * speed * xDirection}%`,
                    rotation: `+=${(index % 2 === 0 ? 2 : -2) * speed}deg`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: CONFIG.scrollTrigger.scrub,
                        markers: CONFIG.scrollTrigger.markers
                    }
                });
                
                // Make overlay respond to scroll position - pulse effect when in view
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    onEnter: () => {
                        gsap.to(item, {
                            opacity: 1,
                            scale: 1.02,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    },
                    onLeave: () => {
                        gsap.to(item, {
                            opacity: 0.85,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(item, {
                            opacity: 1,
                            scale: 1.02,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(item, {
                            opacity: 0.85,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    }
                });
                
                // Subtle hover effect
                const card = item.querySelector('.overlay-card');
                if (card) {
                    item.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.05,
                            y: -5,
                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                    
                    item.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            y: 0,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                }
            });
        }
    }
    
    // Initialize portfolio parallax after images load
    setTimeout(initPortfolioParallax, 1000);
    
    // About section image parallax
    const aboutImage = document.querySelector('.about-image-layer');
    if (aboutImage) {
        gsap.to(aboutImage, {
            y: `${30 * CONFIG.parallaxSpeed.about}%`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.about',
                start: CONFIG.scrollTrigger.start,
                end: CONFIG.scrollTrigger.end,
                scrub: CONFIG.scrollTrigger.scrub,
                markers: CONFIG.scrollTrigger.markers
            }
        });
    }
    
    // Fade in sections on scroll
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
        sections.forEach((section, index) => {
            gsap.fromTo(section, 
                {
                    opacity: 0,
                    y: 80
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                        markers: CONFIG.scrollTrigger.markers
                    }
                }
            );
        });
    }
    
    // Section numbers animation
    const sectionNumbers = document.querySelectorAll('.section-number');
    sectionNumbers.forEach(num => {
        gsap.fromTo(num,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: num,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // Editorial portfolio title animation
    const editorialNumber = document.querySelector('.editorial-number');
    const editorialTitles = document.querySelectorAll('.editorial-title-main, .editorial-title-secondary');
    
    if (editorialNumber) {
        gsap.fromTo(editorialNumber,
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.portfolio-header-editorial',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }
    
    editorialTitles.forEach((title, index) => {
        gsap.fromTo(title,
            {
                opacity: 0,
                y: 80,
                rotation: index === 0 ? -5 : 5,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                rotation: index === 0 ? -2 : 1.5,
                scale: 1,
                duration: 1.2,
                ease: 'back.out(1.7)',
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: '.portfolio-header-editorial',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // Editorial accent line animation
    const editorialAccent = document.querySelector('.editorial-accent');
    if (editorialAccent) {
        gsap.fromTo(editorialAccent,
            {
                scaleX: 0,
                opacity: 0
            },
            {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5,
                scrollTrigger: {
                    trigger: '.portfolio-header-editorial',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }
    
    // Section titles animation (for other sections)
    const sectionTitles = document.querySelectorAll('.section-title-large');
    sectionTitles.forEach(title => {
        gsap.fromTo(title,
            {
                opacity: 0,
                y: 50,
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0% 0 0)',
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
}

// ============================================
// EXPANDABLE SIDEBAR
// ============================================
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (!sidebar || !sidebarToggle) return;
    
    // Start collapsed
    sidebar.classList.add('collapsed');
    
    // Toggle on click
    sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('expanded');
        sidebar.classList.toggle('collapsed');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('expanded') && !sidebar.contains(e.target)) {
            sidebar.classList.remove('expanded');
            sidebar.classList.add('collapsed');
        }
    });
}

// ============================================
// NAVIGATION
// Smooth scrolling and active states
// ============================================
function initNavigation() {
    const topNav = document.querySelector('.top-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Top nav scroll effect
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            topNav.style.background = 'rgba(245, 241, 235, 0.98)';
            topNav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        } else {
            topNav.style.background = 'rgba(245, 241, 235, 0.95)';
            topNav.style.boxShadow = 'none';
        }
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 50; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--color-accent)';
            }
        });
    });
}

// ============================================
// PORTFOLIO GALLERY
// Simple direct image loading from CONFIG.images
// ============================================
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    let allImages = [];
    let visibleCount = 0;
    const MOBILE_LIMIT = 10;
    
    // Check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Create or update Load More button
    function createLoadMoreButton() {
        let loadMoreBtn = document.getElementById('loadMoreBtn');
        if (!loadMoreBtn) {
            loadMoreBtn = document.createElement('button');
            loadMoreBtn.id = 'loadMoreBtn';
            loadMoreBtn.className = 'load-more-btn';
            loadMoreBtn.textContent = 'Load More Photos';
            loadMoreBtn.style.display = isMobile() ? 'block' : 'none';
            
            loadMoreBtn.addEventListener('click', () => {
                showMoreItems();
            });
            
            const portfolioSection = document.querySelector('.portfolio');
            if (portfolioSection) {
                portfolioSection.appendChild(loadMoreBtn);
            }
        }
        return loadMoreBtn;
    }
    
    // Show more items on mobile
    function showMoreItems() {
        if (!isMobile()) return;
        
        const hiddenItems = portfolioGrid.querySelectorAll('.portfolio-item.mobile-hidden');
        const itemsToShow = Math.min(MOBILE_LIMIT, hiddenItems.length);
        
        for (let i = 0; i < itemsToShow; i++) {
            hiddenItems[i].classList.remove('mobile-hidden');
            visibleCount++;
        }
        
        // Animate newly shown items
        const newlyShown = Array.from(hiddenItems).slice(0, itemsToShow);
        if (newlyShown.length > 0) {
            gsap.fromTo(newlyShown, 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6, 
                    ease: 'power2.out',
                    stagger: 0.1
                }
            );
        }
        
        // Hide button if all items are shown
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            const remainingHidden = portfolioGrid.querySelectorAll('.portfolio-item.mobile-hidden').length;
            if (remainingHidden === 0) {
                loadMoreBtn.style.display = 'none';
            }
        }
    }
    
    // Load curated images from CONFIG (limited selection for main page)
    function loadImages() {
        allImages = [];
        
        // Use curatedImages for main portfolio page
        Object.keys(CONFIG.curatedImages).forEach(category => {
            if (CONFIG.curatedImages[category] && Array.isArray(CONFIG.curatedImages[category])) {
                CONFIG.curatedImages[category].forEach(filename => {
                    allImages.push({
                        path: CONFIG.getImagePath(category, filename),
                        category: category,
                        alt: `${category} photography - ${filename.replace(/\.[^.]+$/, '')}`
                    });
                });
            }
        });
        
        if (allImages.length === 0) {
            portfolioGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: #6b6b6b;">No images found. Please add images to CONFIG.curatedImages in main.js</div>';
            return;
        }
        
        renderImages(allImages);
    }
    
    // Render images to grid
    function renderImages(images) {
        portfolioGrid.innerHTML = '';
        visibleCount = 0;
        
        const isMobileDevice = isMobile();
        const itemsToShow = isMobileDevice ? Math.min(MOBILE_LIMIT, images.length) : images.length;
        
        // Size options for playful layout
        const sizeOptions = ['size-small', 'size-medium', 'size-large', 'size-wide', 'size-tall'];
        
        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            
            // Add mobile-hidden class if beyond limit on mobile
            if (isMobileDevice && index >= MOBILE_LIMIT) {
                item.classList.add('mobile-hidden');
            } else {
                visibleCount++;
            }
            
            // Assign random size for playful layout (only on desktop)
            // Size will be adjusted based on orientation after image loads
            if (!isMobileDevice) {
                const randomSize = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
                item.classList.add(randomSize);
            }
            
            // Add random rotation (-6deg to +6deg) for off-axis look
            const rotation = (Math.random() - 0.5) * 12; // -6 to +6 degrees
            const xOffset = (Math.random() - 0.5) * 20; // -10px to +10px
            const yOffset = (Math.random() - 0.5) * 20; // -10px to +10px
            
            // Apply initial transform
            gsap.set(item, {
                rotation: rotation,
                x: xOffset,
                y: yOffset
            });
            
            item.dataset.category = image.category;
            item.dataset.index = index;
            item.dataset.rotation = rotation;
            
            const img = document.createElement('img');
            img.src = image.path;
            img.alt = image.alt;
            img.loading = 'lazy'; // Lazy loading for performance
            
            // Detect image orientation and apply appropriate class
            img.onload = function() {
                const isPortrait = this.naturalHeight > this.naturalWidth;
                const isSquare = Math.abs(this.naturalHeight - this.naturalWidth) < 50; // Allow 50px tolerance for "square"
                
                if (isSquare) {
                    item.classList.add('orientation-square');
                } else if (isPortrait) {
                    item.classList.add('orientation-portrait');
                } else {
                    item.classList.add('orientation-landscape');
                }
                
                // Store aspect ratio for proper sizing
                const aspectRatio = this.naturalWidth / this.naturalHeight;
                item.dataset.aspectRatio = aspectRatio;
                
                // Ensure image displays at full size without cropping
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                img.style.width = 'auto';
                img.style.height = 'auto';
                
                // Remove any background/box styling from container
                item.style.background = 'transparent';
                item.style.padding = '0';
            };
            
            // Handle image load errors gracefully - try alternative public_id formats
            let retryCount = 0;
            img.onerror = function() {
                retryCount++;
                const currentSrc = this.src;
                
                // Try alternative formats if the mapped name fails
                if (retryCount === 1) {
                    // Try without the Cloudinary suffix (in case public_id is just the base name)
                    if (currentSrc.includes('_')) {
                        const altSrc = currentSrc.replace(/_[a-zA-Z0-9]+\.jpg$/, '.jpg');
                        if (altSrc !== currentSrc) {
                            this.src = altSrc;
                            return;
                        }
                    }
                } else if (retryCount === 2) {
                    // Try with lowercase suffix (case sensitivity issue)
                    if (currentSrc.includes('_Ifjyda')) {
                        this.src = currentSrc.replace('_Ifjyda', '_ifjyda');
                        return;
                    }
                    // Try original filename without mapping
                    const originalFilename = filename.replace('.jpg', '');
                    this.src = `${CONFIG.cdnBaseUrl}/${originalFilename}.jpg`;
                    return;
                } else {
                    // All retries failed - hide the item
                    console.warn('Failed to load image after retries:', currentSrc);
                    item.style.display = 'none';
                }
            };
            
            item.appendChild(img);
            item.addEventListener('click', () => {
                // Open lightbox with all images
                const lightboxIndex = allImages.findIndex(img => img.path === image.path);
                openLightbox(lightboxIndex >= 0 ? lightboxIndex : 0, allImages);
            });
            portfolioGrid.appendChild(item);
        });
        
        // Create/update Load More button (not needed for curated selection, but keep for consistency)
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        
        // Animate portfolio items with GSAP (only visible items)
        const visibleItems = portfolioGrid.querySelectorAll('.portfolio-item:not(.mobile-hidden)');
        if (visibleItems.length > 0) {
            // Kill any existing animations on these elements
            gsap.killTweensOf(visibleItems);
            
            // Set initial state
            gsap.set(visibleItems, {
                opacity: 0,
                y: 50,
                scale: 0.95
            });
            
            // Animate in with stagger
            gsap.to(visibleItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: {
                    amount: 0.6,
                    from: 'start'
                },
                scrollTrigger: {
                    trigger: portfolioGrid,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    markers: CONFIG.scrollTrigger.markers
                }
            });
        }
    }
    
    // Handle window resize to update mobile/desktop display
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Re-render to apply mobile limit if needed
            renderImages(allImages);
        }, 250);
    });
    
    // Initial load
    loadImages();
}

// ============================================
// LIGHTBOX MODAL
// Full-screen image viewer with navigation
// ============================================
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    });
    
    // Navigation functions
    function navigateLightbox(direction) {
        currentLightboxIndex += direction;
        
        if (currentLightboxIndex < 0) {
            currentLightboxIndex = currentLightboxImages.length - 1;
        } else if (currentLightboxIndex >= currentLightboxImages.length) {
            currentLightboxIndex = 0;
        }
        
        updateLightboxImage();
    }
    
    function updateLightboxImage() {
        const image = currentLightboxImages[currentLightboxIndex];
        if (image) {
            lightboxImage.src = image.path;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = `${image.category} - Image ${currentLightboxIndex + 1} of ${currentLightboxImages.length}`;
        }
    }
    
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));
    
    // Store function globally for portfolio to use
    window.openLightbox = function(index, images) {
        currentLightboxIndex = index;
        currentLightboxImages = images;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        updateLightboxImage();
    };
}

// ============================================
// CONTACT FORM
// Simple form handling with mailto fallback
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const shootType = formData.get('shoot-type');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = encodeURIComponent(`Photography Inquiry - ${shootType}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Shoot Type: ${shootType}\n\n` +
            `Message:\n${message}`
        );
        
        const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message (you can customize this)
        alert('Thank you for your message! Your email client should open shortly.');
        
        // Reset form
        form.reset();
    });
}

// ============================================
// FOOTER
// Update copyright year
// ============================================
function initFooter() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// TESTIMONIALS ANIMATIONS
// ============================================
function initTestimonials() {
    // Testimonials are now integrated into portfolio section
    // This function is kept for potential future use
}

// ============================================
// MOBILE MENU
// Toggle navigation on mobile devices
// ============================================
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONTACT EMAIL COPY FUNCTIONALITY
// ============================================
function initContactEmail() {
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const emailArrow = document.getElementById('emailArrow');
    const emailNote = document.getElementById('emailNote');
    const email = 'simon.dass.1996@gmail.com';
    
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            await copyToClipboard(email, copyEmailBtn, emailText, emailArrow, emailNote, 'Email address copied to clipboard', 'Click to copy email address');
        });
    }
    
    const copyPhoneBtn = document.getElementById('copyPhoneBtn');
    const phoneText = document.getElementById('phoneText');
    const phoneArrow = document.getElementById('phoneArrow');
    const phoneNote = document.getElementById('phoneNote');
    const phone = '0422086048';
    const phoneDisplay = '0422 086 048';
    
    if (copyPhoneBtn) {
                copyPhoneBtn.addEventListener('click', async () => {
            await copyToClipboard(phone, copyPhoneBtn, phoneText, phoneArrow, phoneNote, 'Phone number copied to clipboard', 'Click to copy phone number', 'Click to copy phone number');
        });
    }
}

async function copyToClipboard(text, btn, textEl, arrowEl, noteEl, successMsg, defaultMsg, displayText = null) {
    try {
        // Copy to clipboard
        await navigator.clipboard.writeText(text);
        
        // Update button state
        btn.classList.add('copied');
        textEl.textContent = 'Copied!';
        arrowEl.textContent = '✓';
        noteEl.textContent = successMsg;
        
        // Reset after 2 seconds
        setTimeout(() => {
            btn.classList.remove('copied');
            textEl.textContent = displayText || text;
            arrowEl.textContent = '→';
            noteEl.textContent = defaultMsg;
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            btn.classList.add('copied');
            textEl.textContent = 'Copied!';
            arrowEl.textContent = '✓';
            noteEl.textContent = successMsg;
            
            setTimeout(() => {
                btn.classList.remove('copied');
                textEl.textContent = displayText || text;
                arrowEl.textContent = '→';
                noteEl.textContent = defaultMsg;
            }, 2000);
        } catch (fallbackErr) {
            noteEl.textContent = 'Unable to copy. ' + (displayText || text);
        }
        
        document.body.removeChild(textArea);
    }
}

// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll-heavy functions if needed
// window.addEventListener('scroll', throttle(handleScroll, 16));

