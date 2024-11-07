
const createHomePage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add("home-page");

    const logo = document.createElement('p');
    logo.textContent = "Copper Tap Inn";
    
    const para = document.createElement('p');
    para .textContent = "BEST RESTAURANT";

    const button = document.createElement('button');
    button.classList.add("menu");
    button.setAttribute("type", "button");
    button.textContent = "Discover our menu"

    homePage.appendChild(logo);
    homePage.appendChild(para);
    homePage.append(button);

    return homePage;
};

export default createHomePage;