import domGenerator from "dom-generator";

/**
 * create icon button component
 * first destructure object and get (src) and (alt) then use these data in component
 * @param {object} param0 icon data in json file (src, alt)
 * @returns icon button component
 */
export function iconBtn({ src, alt }) {
    return domGenerator({
        tag: "button",
        attributes: { class: "p-1" },
        children: [{
            tag: "img",
            attributes: { class: "w-7" },
            properties: { src: src, alt: alt }
        }]
    })
}