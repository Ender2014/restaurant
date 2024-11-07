import "./styles.css";
import createHomePage from "./pages/home-page.js"
import createMenuPage from "./pages/menu-page.js"
import createAboutPage from "./pages/about-page.js"
import createContactPage from "./pages/contact-page.js"

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector("#content");
    content.appendChild(createHomePage());
});

(function() {
    const content = document.querySelector("#content");

    document.addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;

        let currentPage = null;
        if (event.target.classList.contains('home')) {
            currentPage = createHomePage();

        } else if (event.target.classList.contains('about')) {
            currentPage = createAboutPage();

        } else if (event.target.classList.contains('menu')) {
            currentPage = createMenuPage();
            
        } else if (event.target.classList.contains('contact')) {
            currentPage = createContactPage();
        }

        if (currentPage) {
            content.textContent = ''; // Clear the current content
            content.appendChild(currentPage); // Load the selected page
        }
    });
})();