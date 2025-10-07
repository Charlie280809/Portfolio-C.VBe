// Hotjar Tracking Code for https://portfoliocvbe.tech/
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6534974,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


window.addEventListener("DOMContentLoaded", () => {
    const bg = document.createElement("div");
    bg.dataset.usProject = "k5wkDeEZHty9tz3YHMpP";
    bg.style.cssText = "width:100%; height:100%; position:fixed; top:0; left:0; z-index:-1;";
    document.body.prepend(bg);

    (function() {
        if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: false };
        const i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
        i.onload = function() {
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
hamburger.addEventListener('click', function() { //when clicking hamburger
    navLinks.classList.add('active'); //open nav-links
    document.querySelectorAll('.nav-links a').forEach(link => { //for each link in nav-links
        link.addEventListener('click', function() { 
           closeMenu(); //when clicking a link, close the menu
        });
    });
    hamburger.classList.toggle('open'); //add open class to hamburger
    if (!hamburger.classList.contains('open')) {
        closeMenu(); //if hamburger doesn't have open class, close the menu
    }
});

const aboutmeSection = document.querySelector('.aboutme');
const projectsSection = document.querySelector('.projects');
const contactSection = document.querySelector('.contact');
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelector('.logo').addEventListener('click', function(event) {scrollToTop();});
document.querySelector('.home_link').addEventListener('click', function(event) {scrollToTop();});
document.querySelector('.aboutme_link').addEventListener('click', function(event) {
    aboutmeSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.projects_link').addEventListener('click', function(event) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.contact_link').addEventListener('click', function(event) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});