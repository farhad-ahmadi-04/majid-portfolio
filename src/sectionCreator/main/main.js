import domGenerator from "dom-generator";
import hero from "../hero/hero";
import about from "./aboutMe/about";

export default function main() {
    return domGenerator({
        tag: "main",
        attributes: { class: "bg-Beige" },
        children: [{
            tag: hero()
        }, {
            tag: about()
        }]
    })
}