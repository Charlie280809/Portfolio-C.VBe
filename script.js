const aboutmeSection = document.querySelector('.aboutme');
const projectsSection = document.querySelector('.projects');

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

// document.querySelector('.contact_link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default anchor click behavior
//     heroSection.scrollIntoView({ behavior: 'smooth' });
// });