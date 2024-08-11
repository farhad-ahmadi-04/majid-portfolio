import domGenerator from "dom-generator";
import "./skills.css"
import cardSkills from "../../../components/cardSkills";
import images from "../../../datas/images.json"
import hardSkillCard from "../../../components/hardSkillCard/hardSkillCard";
import "./skills.css";
import "./src/assets/fonts/font.css";

let { manager, learning, triceps } = images.images
/**
 * create skill section component 
 * @returns element
 */
export default function skills() {
    return domGenerator(
        {
            tag: "section",
            attributes: { class: "px-5" },
            children: [
                {
                    tag: "h1",
                    attributes: { class: "text-center text-blue-dark text-5xl xsm:text-3xl font-bold" },
                    properties: { textContent: "skills" }
                },
                {
                    tag: "div",
                    attributes: { class: "container flex justify-evenly md:flex-col md:gap-9" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "flex flex-col items-center gap-1.5 w-1/3 md:w-full" },
                            children: [
                                {
                                    tag: "img",
                                    attributes: {
                                        class: "opacity-5 md:w-24",
                                        src: manager,
                                        alt: "manager image"
                                    }
                                },
                                {
                                    tag: "div",
                                    attributes: { class: "flex flex-col gap-4 w-full" },
                                    children: [
                                        {
                                            tag: hardSkillCard('Site design engineer', "right"),
                                        },
                                        {
                                            tag: hardSkillCard("User experience designer")
                                        },
                                        {
                                            tag: hardSkillCard("User interface designer", "right")
                                        },
                                        {
                                            tag: hardSkillCard("Proficient in JavaScript")
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            tag: "div",
                            attributes: { class: "flex items-center md:hidden" },
                            children: {
                                tag: "div",
                                attributes: { class: "bg-dark border rounded-full border-blue-light border-4 p-10" },
                                children: {
                                    tag: "img",
                                    attributes: {
                                        class: "opacity-5",
                                        src: learning,
                                        alt: "learning"
                                    }
                                }
                            }
                        },
                        {
                            tag: "div",
                            attributes: { class: "flex flex-col items-center gap-5 md:relative mb-16" },
                            children: [
                                {
                                    tag: "div",
                                    attributes: { class: "triceps-img self-start start-1/3" },
                                    children: {
                                        tag: "img",
                                        attributes: {
                                            class: "opacity-5 md:w-24",
                                            src: triceps,
                                            alt: ""
                                        }
                                    }
                                },
                                {
                                    tag: "div",
                                    attributes: {
                                        class: "-rotate-6 mb-10  md:left-8 md:mb-0 md:self-start"
                                    },
                                    children: {
                                        tag: "span",
                                        attributes: { class: "Grandstander-SemiBold text-blue-dark text-3xl md:text-2xl font-semibold bg-white px-7 py-1.5 rounded-lg" },
                                        properties: { textContent: "Soft Skill" }
                                    }
                                },
                                {
                                    tag: "div",
                                    attributes: { class: "grid gap-10 grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:gap-0 md:w-full" },
                                    children: [
                                        {
                                            tag: cardSkills("Digital marketing", "bg-cards-yellow", -30, 30, "md:row-span-2 md:self-center md:justify-self-center")
                                        },
                                        {
                                            tag: cardSkills("Product designer", "bg-cards-blue", -30, 30, "md:col-span-2 md:justify-self-center md:mb-16")
                                        },
                                        {
                                            tag: cardSkills("Team management", "bg-cards-brown", -30, 30, "md:row-span-2 md:self-center md:justify-self-center")
                                        },
                                        {
                                            tag: cardSkills("connections", "bg-cards-pink", -30, 30, "md:col-span-2 md:justify-self-center md:mt-16")
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
}