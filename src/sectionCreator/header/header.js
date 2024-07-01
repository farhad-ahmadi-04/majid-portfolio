import domGenerator from "dom-generator";
import "./header.css"

export default function header() {
    return (
        domGenerator(
            {
                tag: "header",
                attributes: { id: "header" },
                children: {
                    tag: "div",
                    attributes: { class: "container containerHeader" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "bg-nav-header" },
                            children: {
                                tag: "ul",
                                attributes: { class: "liRepository" },
                                children: [
                                    liCreator("Hero", ""),
                                    liCreator("About", ""),
                                    liCreator("Skills", ""),
                                    liCreator("Projects", ""),
                                    liCreator("giving thanks", ""),
                                ]
                            }
                        },
                        {
                            tag: "div",
                            attributes: { class: "triangle" }
                        },
                        {
                            tag: "div",
                            attributes: { class: "parentIcon-H" },
                            children: {
                                tag: "img",
                                attributes: { class: "menu-nav-H", src: "./public/images/marketeq_menu.svg" }
                            }
                        }
                    ]
                }
            }
        )
    )
}

function liCreator(child, href = "#") {
    return (
        {
            tag: "li",
            properties: { textContent: child },
            attributes: { href: href }
        }
    )
}