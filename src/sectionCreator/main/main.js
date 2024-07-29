import domGenerator from "dom-generator";
import hero from "./hero/hero";
import about from "./aboutMe/about";
import skills from "./skills/skills";
import { project } from "./projectSec/project";
import render from "../../components/render";
import images from "/src/datas/images.json"
import { cardProject } from "./cardProject/cardProject";

export default function main() {
    const main = domGenerator({
        tag: "main",
        attributes: { class: "bg-Beige overflow-hidden" },
    })
    render(main, hero())
    render(main, about())
    render(main, skills())
    render(main, project())
    images.images.cardProject.map(com => {
        render(main, cardProject(com))
    })
    return main
}