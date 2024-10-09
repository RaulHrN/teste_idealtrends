// Components
import footer from './components/footer.js';
import header from './components/header.js';

// Pages
import { HomePage, initSplide } from './pages/home.js';

// Content Render
function renderPage(content) {
    document.getElementById('app').innerHTML = `
        ${header}
        ${content}
        ${footer}
    `;
}

// HomePage Render
document.addEventListener('DOMContentLoaded', () => {
    renderPage(HomePage);
    initSplide();
});

// Mobile Side-menu function
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    } else {
        console.error('Elements not found');
    }
});

