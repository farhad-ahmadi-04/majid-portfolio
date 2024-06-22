import domGenerator from "dom-generator";
import "./header.css"
import headerData from "../../datas/headerData.json"
let data = headerData.nav

export default function header() {
    return (
        domGenerator(
            {
                tag: "header",
                attributes: { id: "header" },
                children: {
                    tag: "div",
                    attributes: { class: "container containerHeader" },
                    children: {
                        tag: "ul",
                        attributes: { class: "liRepository" },
                        children: liCreator(data)
                    }
                }
            }
        )
    )
}

function liCreator(info) {
    info.foreach
    return (
        (
            function (item) {
                domGenerator(
                    {
                        tag: "li",
                        attributes: { class: "liHeader" },
                        properties: { textContent: item.child }
                    }
                )
            }
        )
    )
}

// console.log(liCreator(data));