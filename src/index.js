import "/index.css";
import render from "/render.js";
import { footer } from "/footer.js";
import header from "/header.js";
import main from "/main.js";

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