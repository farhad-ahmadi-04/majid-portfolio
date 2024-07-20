import domGenerator from "dom-generator"

/**
 * create card component for hard skill by don generator and adding tailwind styles 
 * @param {string} skill -  hard skill  
 * @returns - card component (element)😎
 */
export default function hardSkillCard(skill) {
    return domGenerator({
        tag: "div",
        attributes: { class: "px-4 py-2 rounded-lg bg-Beige-Medium inline-block" },
        children: [{
            tag: "span",
            attributes: { class: "text-2xl md:text-base font-bold text-cards-text text-center" },
            properties: { textContent: skill }
        }]
    })
}