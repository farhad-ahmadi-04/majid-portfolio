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
                            children: {
                                tag: "ul",
                                attributes: { class: "liRepository" },
                                children: [
                                    liCreator("li", "", "Hero", ""),
                                    liCreator("li", "", "About", ""),
                                    liCreator("li", "", "Skills", ""),
                                    liCreator("li", "", "Projects", ""),
                                    liCreator("li", "", "giving thanks", ""),
                                ]
                            }
                        },
                        {
                            tag: "div"
                        }
                    ]
                }
            }
        )
    )
}

function liCreator(tagName, className, child, href = "#") {
    return (
        {
            tag: tagName,
            attributes: { class: className },
            properties: { textContent: child },
            href: href
        }
    )
}