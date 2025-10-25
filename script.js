// Background
window.addEventListener("DOMContentLoaded", () => {
    const bg = document.createElement("div");
    bg.dataset.usProject = "k5wkDeEZHty9tz3YHMpP";
    bg.style.cssText = "width:100%; height:100%; position:fixed; top:0; left:0; z-index:-1;";
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

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
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

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            rightMenu.classList.remove('open');
            document.body.style.overflow = '';

            // --- Smooth scroll logic ---
            const href = link.getAttribute('href');

            // If it's a hash link (e.g. ./index.html#projects or #projects)
            if (href.includes('#')) {
                const [, hash] = href.split('#'); // Extract after #
                const target = document.getElementById(hash);

                // Prevent reload if already on index.html
                if (target && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/')) {
                    e.preventDefault(); // Stop page reload
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', `#${hash}`); // Update URL hash
                }
            }
        });
    });
});


//.aboutme-photo changer
const photo = document.querySelector('.aboutme-photo');
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