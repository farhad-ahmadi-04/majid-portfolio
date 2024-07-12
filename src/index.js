import "./index.css";
import render from "./components/render.js";
import { footer } from "./sectionCreator/footer/footer.js";
import header from "./sectionCreator/header/header.js";
import main from "./sectionCreator/main/main.js";

let app = document.querySelector("#app")

/**
 * get render from page content
 */
function loadContent() {
    render(app, header())
    render(app, main())
    render(app, footer())
}
loadContent()