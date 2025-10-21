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

/*Hamburger menu*/
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('active');
}
hamburger.addEventListener('click', function () { //when clicking hamburger
    navLinks.classList.add('active'); //open nav-links
    document.querySelectorAll('.nav-links a').forEach(link => { //for each link in nav-links
        link.addEventListener('click', function () {
            closeMenu(); //when clicking a link, close the menu
        });
    });
    hamburger.classList.toggle('open'); //add open class to hamburger
    if (!hamburger.classList.contains('open')) {
        closeMenu(); //if hamburger doesn't have open class, close the menu
    }
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

//.aboutme-photo changer
const photo = document.querySelector('.aboutme-photo');
const photos = [
    './images/photo_1.png',
    './images/photo_2.png',
    './images/photo_3.png',
    './images/photo_4.png'
];
let currentPhoto = 1;
function changePhoto() {
    currentPhoto = (currentPhoto + 1) % photos.length;
    photo.src = photos[currentPhoto];
}
setInterval(changePhoto, 5000);