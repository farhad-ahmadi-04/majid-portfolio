import "./index.css";
import header from "./sectionCreator/header/header.js";

let app = document.querySelector("#app")

app.appendChild(
    // header
    header()
)
