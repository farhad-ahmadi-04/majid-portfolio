import domGenerator from "dom-generator";
import "./skills.css"
import cardSkills from "../../../components/cardSkills";
import images from "../../../datas/images.json"

let { manager, learning, triceps, paperclip } = images.images

export default function skills() {
    return domGenerator(
        {
            tag: "section",
            attributes: { class: "" },
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
                                        class: "opacity-10",
                                        src: "",
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
                                attributes: { class: "" },
                                childer: {
                                    tag: "img",
                                    attributes: {
                                        class: "",
                                        src: "",
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
                                            class: "",
                                            src: "",
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
                                    attributes: { class: "" },
                                    children: [
                                        {
                                            tag: cardSkills()
                                        },
                                        {
                                            tag: cardSkills()
                                        },
                                        {
                                            tag: cardSkills()
                                        },
                                        {
                                            tag: cardSkills()
                                        },
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