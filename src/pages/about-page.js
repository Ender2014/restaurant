const createAboutPage = () => {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add("about-page");

    const heading = document.createElement('div');
    heading.classList.add("heading");
    heading .textContent = "About";

    const page = document.createElement('div');
    page.classList.add("page");
    
    aboutPage.appendChild(heading);
    aboutPage.appendChild(page);

    return aboutPage;
}

export default createAboutPage;