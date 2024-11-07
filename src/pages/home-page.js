
const createHomePage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add("home-page");

    const logo = document.createElement('p');
    logo.textContent = "Copper Tap Inn";
    
    const para = document.createElement('p');
    para .textContent = "BEST RESTAURANT";

    homePage.appendChild(logo);
    homePage.appendChild(para);

    return homePage;
};

export default createHomePage;