let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('shrink');
    }
    lastScrollY = window.scrollY;
});

function toggleNavbar() {
    navbar.classList.toggle('expand');
}




