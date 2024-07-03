import "./index.css";
import render from "./components/render.js";
import { footer } from "./sectionCreator/footer/footer.js";
import header from "./sectionCreator/header/header.js";

let app = document.querySelector("#app")

/**
 * get render from page content
 */
function loadContent() {
    render(app, header())
    render(app, footer())
}
loadContent()