const createMenuPage = () => {
    const contactMenu = document.createElement('div');
    contactMenu.classList.add("about-page");

    const heading = document.createElement('div');
    heading.classList.add("heading");
    heading.textContent = "Menu";

    const page = document.createElement('div');
    page.classList.add("page");
    
    contactMenu.appendChild(heading);
    contactMenu.appendChild(page);

    return contactMenu;
}

export default createMenuPage;