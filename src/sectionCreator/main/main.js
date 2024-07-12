import domGenerator from "dom-generator";
import hero from "../hero/hero";

export default function main() {
    return domGenerator({
        tag: "main",
        children: [{
            tag: hero()
        }]
    })
}