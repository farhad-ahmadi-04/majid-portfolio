import domGenerator from "dom-generator";
import "./skills.css"
import cardSkills from "../../../components/cardSkills";
import images from "../../../datas/images.json"
import hardSkillCard from "../../../components/hardSkillCard";

let { manager, learning, triceps } = images.images
export default function skills() {
    return domGenerator(
        {
            tag: "section",
            attributes: { class: "px-5" },
            children: [
                {
                    tag: "h1",
                    attributes: { class: "text-center text-6xl md:text-4xl xsm:text-3xl" },
                    properties: { textContent: "skills" }
                },
                {
                    tag: "div",
                    attributes: { class: "container flex justify-between md:flex-col" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "flex flex-col items-center gap-1.5 w-1/3 md:w-full" },
                            children: [
                                {
                                    tag: "img",
                                    attributes: {
                                        class: "opacity-5",
                                        src: manager,
                                        alt: ""
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
                            attributes: { class: "" },
                            children: {
                                tag: "div",
                                attributes: { class: "bg-dark" },
                                children: {
                                    tag: "img",
                                    attributes: {
                                        class: "opacity-5",
                                        src: learning,
                                        alt: ""
                                    }
                                }
                            }
                        },
                        {
                            tag: "div",
                            attributes: { class: "" },
                            children: [
                                {
                                    tag: "div",
                                    attributes: { class: "" },
                                    children: {
                                        tag: "img",
                                        attributes: {
                                            class: "opacity-5",
                                            src: triceps,
                                            alt: ""
                                        }
                                    }
                                },
                                {
                                    tag: "div",
                                    attributes: { class: "" },
                                    children: {
                                        tag: "span",
                                        attributes: { class: "" }
                                    }
                                },
                                {
                                    tag: "div",
                                    attributes: { class: "flex gap-20" },
                                    children: [
                                        {
                                            tag: "div",
                                            attributes: { class: "" },
                                            children: [
                                                {
                                                    tag: cardSkills("Digital marketing", "bg-cards-yellow")
                                                },
                                                {
                                                    tag: cardSkills("Product designer", "bg-cards-blue")
                                                },
                                            ]
                                        },
                                        {
                                            tag: "div",
                                            attributes: { class: "" },
                                            children: [
                                                {
                                                    tag: cardSkills("Team management", "bg-cards-brown")
                                                },
                                                {
                                                    tag: cardSkills("connections", "bg-cards-pink")
                                                },
                                            ]
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