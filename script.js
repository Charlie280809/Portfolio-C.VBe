// Background
window.addEventListener("DOMContentLoaded", () => {
    const bg = document.createElement("div");
    bg.dataset.usProject = "k5wkDeEZHty9tz3YHMpP";
    bg.style.cssText = "width:100%; height:110%; position:fixed; top:0; left:0; z-index:-1;";
    document.body.prepend(bg);

    (function () {
        if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false };
            const i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
            i.onload = function () {
                if (!window.UnicornStudio.isInitialized) {
                    UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            (document.head || document.body).appendChild(i);
        }
    })();
});

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('nav-toggle');
    const rightMenu = document.querySelector('nav .right');
    const navLinks = document.querySelectorAll('nav .right a');

    // Toggle menu on icon click
    toggle.addEventListener('click', () => {
        rightMenu.classList.toggle('open');
        document.body.style.overflow = rightMenu.classList.contains('open') ? 'hidden' : '';
    });

    // shared smooth-scroll function
    function smoothScrollToHash(link, event) {
        const href = link.getAttribute('href') || '';
        if (!href.includes('#')) return;
        const [, hash] = href.split('#');
        if (!hash) return;
        const target = document.getElementById(hash);
        if (target) {
            event && event.preventDefault();
            // close mobile menu if open
            rightMenu && rightMenu.classList.remove('open');
            document.body.style.overflow = '';
            target.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', `#${hash}`);
        }
    }

    // Close menu when a nav link is clicked + smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            smoothScrollToHash(link, e);
        });
    });

    // Also attach to the CTA button(s)
    const ctaBTN = document.querySelector('.CTA-btn');
    ctaBTN.addEventListener('click', (e) => smoothScrollToHash(ctaBTN, e));
    const logoLink = document.querySelector('.logoLink');
    logoLink.addEventListener('click', (e) => smoothScrollToHash(logoLink, e));
});


//.aboutme-photo changer
document.addEventListener("DOMContentLoaded", () => {
    const photo = document.querySelector('.aboutme-photo');
    if(!photo) return;
    const photos = [
        './images/photo_1.png',
        './images/photo_2.png',
        './images/photo_3.png',
        './images/photo_4.png'
    ];
    let currentPhoto = 0;
    function changePhoto() {
        photo.style.opacity = 0.25;
        setTimeout(() => {
            currentPhoto = (currentPhoto + 1) % photos.length;
            photo.src = photos[currentPhoto];
            photo.style.opacity = 1;
        }, 300);
    }
    setInterval(changePhoto, 10000);
});