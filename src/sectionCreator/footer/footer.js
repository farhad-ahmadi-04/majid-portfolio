import domGenerator from "dom-generator";

/**
 * craete footer component by using domGenerator
 * @returns footer component
 */
export function footer() {
    return domGenerator({
        tag: "footer",
        children: [{
            tag: "div",
            attributes: { class: "container flex flex-nowrap justify-items-center md:flex-wrap" },
            children: [{
                tag: "div",
                attributes: { class: "container-item" }
            }, {
                tag: "div",
                attributes: { class: "container-item" }
            }]

        }]
    })
}