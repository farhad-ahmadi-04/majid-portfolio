import domGenerator from "dom-generator";

/**
 * create icon button component
 * first destructure object and get (src) and (alt) then use these data in component
 * @param {object} param0 icon data in json file (src, alt)
 * @param {string} extraClass - extra class for add class to component
 * @returns icon button component
 */
export function iconBtn({ src, alt }, extraClass = "") {
    return domGenerator({
        tag: "button",
        attributes: { class: `p-1 ${extraClass}` },
        children: [{
            tag: "img",
            attributes: { class: "w-7" },
            properties: { src: src, alt: alt }
        }]
    })
}