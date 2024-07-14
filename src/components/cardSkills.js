import domGenerator from "dom-generator"

export default function cardSkills(text, bgColor, rotate, minusRotate) {
    return domGenerator(
        {
            tag: "div",
            attributes: {
                class: `${bgColor} w-44 h-44 rotate-${rotate = 0} 
                flex items-center justify-center
                `,
                style: `transform: rotate(${minusRotate = 0});`
            },
            children: [
                {
                    tag: "div",
                    attributes: { class: `border w-40 h-40 flex items-center justify-center` },
                    children: {
                        tag: "span",
                        attributes: { class: "text-sm" },
                        properties: { textContent: text }
                    }
                },
                {
                    tag: "img",
                    attributes: {
                        class: "absolute bottom-40 left-40",
                        src: "/images/Paperclip.svg",
                        alt: "Paperclip"
                    }
                }
            ]
        }
    )
}