import domGenerator from "dom-generator";
import hero from "./hero/hero";
import about from "./aboutMe/about";
import skills from "./skills/skills";
import { project } from "./projectSec/project";
import cardProject from "./cardProject/cardProject";

export default function main() {
    return domGenerator({
        tag: "main",
        attributes: { class: "bg-Beige overflow-hidden" },
        children: [{
            tag: hero()
        }, {
            tag: about()
        }, {
            tag: skills()
        }, {
            tag: project()
        }, {
            tag: cardProject()
        }]
    })
}