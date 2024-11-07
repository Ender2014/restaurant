import "./styles.css";
import { createHomePage } from "./pages/home-page.js"

const content = document.querySelector("#content");
const homePage = createHomePage();

content.appendChild(homePage);
