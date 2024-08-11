import domGenerator from "dom-generator";
import "./header.css"
import icons from "../../datas/icons.json"
import "../../../public/fonts/font.css";

export default function header() {
    return (
        domGenerator(
            {
                tag: "header",
                attributes: { id: "header", class: "bg-blue-dark heebo-medium" },
                children: {
                    tag: "div",
                    attributes: { class: "container flex" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "pl-5 bg-Beige xsm:hidden py-2 sm:py-4 md:py-2" },
                            children: {
                                tag: "ul",
                                attributes: { class: "flex" },
                                children: [
                                    { tag: liCreator("Hero", "") },
                                    { tag: liCreator("About", "") },
                                    { tag: liCreator("Skills", "") },
                                    { tag: liCreator("Projects", "") },
                                    { tag: liCreator("giving thanks", "") },
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
    return domGenerator(
        {
            tag: "li",
            properties: { textContent: child },
            attributes: { href: href, class: "py-1 sm:py-2 sm:px-0 px-1 mx-3 font-bold text-Beige-darker sm:text-sm text-lg" }
        }
    )

}