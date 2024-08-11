import domGenerator from "dom-generator"
import "/public/fonts/font.css";

/**
 * create card component that you are able to add extra class, choose bg, set your text and set number to rotation for design
 * @param {string} text - text of card
 * @param {string} bgColor - background of card
 * @param {number} max - maximum number of rotation 
 * @param {number} min - minimum number of rotation 
 * @param {string} extraClass - extra class if we want to add to tis card
 * @returns element component (card)
 */
export default function cardSkills(text, bgColor, max, min, extraClass = "") {
    return domGenerator(
        {
            tag: "div",
            attributes: {
                class: `${bgColor} heebo-medium w-28 h-28 sm:w-24 sm:h-24 p-2 md:p-0.5
                flex items-center justify-center md:rotate-0 ${extraClass}`,
                style: `transform: rotate(${Math.floor(Math.random() * (max - min + 1)) + min}deg);`
            },
            children: [
                {
                    tag: "div",
                    attributes: { class: `border-2 md:border-1 border-blue-light w-full h-full flex items-center justify-center` },
                    children: {
                        tag: "span",
                        attributes: { class: "text-sm sm:text-xs font-semibold text-center" },
                        properties: { textContent: text }
                    }
                },
                {
                    tag: "img",
                    attributes: {
                        class: "absolute -top-2.5 -right-2.5",
                        src: "./public/images/Paperclip.svg",
                        alt: "Paperclip"
                    }
                }
            ]
        }
    )
}