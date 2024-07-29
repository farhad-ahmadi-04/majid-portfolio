import domGenerator from "dom-generator";
import "./hardSkillCard.css";
import "/src/assets/fonts/font.css";

/**
 * create card component for hard skill by don generator and adding tailwind styles 
 * @param {string} skill -  hard skill  
 * @param {string} position -  set position of element  
 * @returns - card component (element)😎
 */
export default function hardSkillCard(skill, position = "self-start") {
    return domGenerator({
        tag: "div",
        attributes: { class: `hard-skill-card heebo-bold test px-4 py-2 rounded-lg bg-Beige-Medium text-center ${position.toLocaleLowerCase() === "right" ? 'self-end' : position}` },
        children: [{
            tag: "span",
            attributes: { class: "text-2xl md:text-base font-bold text-cards-text " },
            properties: { textContent: skill }
        }]
    })
}