import domGenerator from "dom-generator";
import "./header.css"
import icons from "../../datas/icons.json"

export default function header() {
    return (
        domGenerator(
            {
                tag: "header",
                attributes: { id: "header", class: "bg-blue-dark" },
                children: {
                    tag: "div",
                    attributes: { class: "container flex" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "bg-nav-header bg-Beige xsm:hidden py-2 sm:py-4 md:py-8" },
                            children: {
                                tag: "ul",
                                attributes: { class: "flex" },
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
                            attributes: { class: "triangle  xsm:hidden" }
                        },
                        {
                            tag: "div",
                            attributes: { class: "my-2 mx-3 xsm:flex hidden" },
                            children: {
                                tag: "img",
                                attributes: { class: "menu-nav-H", src: icons.header.menu }
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
            attributes: { href: href, class: "py-2 sm:py-1 sm:px-2 px-1 mx-3 font-bold text-Beige-dark sm:text-xl text-sm" }
        }
    )
}