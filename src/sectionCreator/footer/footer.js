import domGenerator from "dom-generator";
import icons from "../../datas/icons.json"

/**
 * craete footer component by using domGenerator
 * @returns footer component
 */
export function footer() {
    return domGenerator({
        tag: "footer",
        attributes: { class: "bg-blue-dark" },
        children: [{
            tag: "div",
            attributes: { class: "container grid grid-cols-2 justify-items-center md:flex-wrap md:grid-cols-1" },
            children: [{
                tag: "div",
                attributes: { class: "container-item flex justify-items-center items-center" },
                children: [{
                    tag: "div",
                    attributes: { class: "item-first flex flex-col justify-center items-center gap-3" },
                    children: [{
                        tag: "img",
                        attributes: { class: "xsm:hidden w-32 h-40" },
                        properties: { src: icons.footer.avatar }
                    }, {
                        tag: "h1",
                        attributes: { class: "text-4xl font-bold text-center text-Beige" },
                        properties: { textContent: "Giving Thanks" }
                    }, {
                        tag: "div",
                        attributes: { class: "flex flex-col justify-center text-Beige-dark gap-1" },
                        children: [{
                            tag: "p",
                            attributes: { class: "text-center text-2xl" },
                            properties: { textContent: "Get in touch:" }
                        }, {
                            tag: "p",
                            attributes: { class: "text-center text-xl" },
                            properties: { textContent: "majidsheshbelooki@gmail.com" }
                        }]
                    }]
                }, {
                    tag: "div",
                    attributes: { class: "item-second" },
                }]
            }, {
                tag: "div",
                attributes: { class: "container-item" }
            }]

        }]
    })
}