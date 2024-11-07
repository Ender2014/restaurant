const createContactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add("about-page");

    const heading = document.createElement('div');
    heading.classList.add("heading");
    heading.textContent = "Contact";

    const page = document.createElement('div');
    page.classList.add("page");
    
    contactPage.appendChild(heading);
    contactPage.appendChild(page);

    return contactPage;
}

export default createContactPage;