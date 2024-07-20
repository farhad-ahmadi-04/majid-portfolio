import domGenerator from "dom-generator"

export default function cardSkills(text, bgColor, max, min, extraClass = "") {
    return domGenerator(
        {
            tag: "div",
            attributes: {
                class: `${bgColor} w-28 h-28 p-2
                flex items-center justify-center md:rotate-0 ${extraClass}`,
                style: `transform: rotate(${Math.floor(Math.random() * (max - min + 1)) + min}deg);`
            },
            children: [
                {
                    tag: "div",
                    attributes: { class: `border-2 border-blue-light w-full h-full flex items-center justify-center` },
                    children: {
                        tag: "span",
                        attributes: { class: "text-sm font-semibold text-center" },
                        properties: { textContent: text }
                    }
                },
                {
                    tag: "img",
                    attributes: {
                        class: "absolute -top-2.5 -right-2.5",
                        src: "/images/Paperclip.svg",
                        alt: "Paperclip"
                    }
                }
            ]
        }
    )
}