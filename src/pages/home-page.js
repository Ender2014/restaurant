
export const createHomePage = () => {
    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add("home-page");

    const logo = document.createElement('p');
    logo.textContent = "Copper Tap Inn";
    homePageDiv.appendChild(logo);

    const para = document.createElement('p');
    para .textContent = "BEST RESTAURANT";
    homePageDiv.appendChild(para);

    return homePageDiv;
};