import domGenerator from "dom-generator"

export default function cardSkills() {
    return domGenerator(
        {
            tag: "div",
            attributes: { class: "" },
            children: [
                {
                    tag: "div",
                    attributes: { class: "" },
                    children: {
                        tag: "span",
                        attributes: { class: "" },
                        properties: { textContent: "" }
                    }
                },
                {
                    tag: "img",
                    attributes: {
                        class: "",
                        src: "",
                        alt: ""
                    }
                }
            ]
        }
    )
}