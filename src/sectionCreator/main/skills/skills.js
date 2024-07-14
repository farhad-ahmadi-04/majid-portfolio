import domGenerator from "dom-generator";
import "./skills.css"
import cardSkills from "../../../components/cardSkills";
import images from "../../../datas/images.json"

let { manager, learning, triceps } = images.images

export default function skills() {
    return domGenerator(
        {
            tag: "section",
            attributes: { class: "bg-Beige" },
            children: [
                {
                    tag: "h1",
                    attributes: { class: "" },
                    properties: { textContent: "skills" }
                },
                {
                    tag: "div",
                    attributes: { class: "container" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "" },
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
                                    attributes: { class: "" },
                                    children: [
                                        {
                                            tag: "span",
                                            attributes: { class: "" },
                                            properties: { textContent: "Site design engineer" }
                                        },
                                        {
                                            tag: "span",
                                            attributes: { class: "" },
                                            properties: { textContent: "User experience designer" }
                                        },
                                        {
                                            tag: "span",
                                            attributes: { class: "" },
                                            properties: { textContent: "User interface designer" }
                                        },
                                        {
                                            tag: "span",
                                            attributes: { class: "" },
                                            properties: { textContent: "Proficient in JavaScript" }
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