import "./styles.css";
import createHomePage from "./pages/home-page.js"
import createMenuPage from "./pages/menu-page.js"
import createAboutPage from "./pages/about-page.js"

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector("#content");
    content.appendChild(createHomePage());
});

(function() {
    const buttons = document.querySelectorAll('.header button');
    const content = document.querySelector("#content");
    let currentPage = "";

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('home')) {
                currentPage = createHomePage();

            } else if (button.classList.contains('about')) {
                currentPage = createAboutPage();
              
                
            } else if (button.classList.contains('menu')) {
                currentPage = createMenuPage();
              
            }
            content.textContent = '';
            content.appendChild(currentPage);
        })
    }); 
})();