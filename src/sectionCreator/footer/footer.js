import domGenerator from "dom-generator";
import icons from "../../datas/icons.json"
import { iconBtn } from "../../components/buttonComponent/iconBtn";

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
            attributes: { class: "container grid grid-cols-3 justify-items-center md:grid-cols-1 md:grid-rows-2" },
            children: [{
                tag: "div",
                attributes: { class: "container-item flex flex-col justify-between items-center gap-4 w-full" },
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
                }],
            }, {
                tag: "div",
                attributes: { class: "container-item  w-full flex flex-col " },
                children: [{
                    tag: "div",
                    attributes: { class: "xsm:hidden w-60 h-56 pt-5" },
                    children: [{
                        tag: "img",
                        attributes: { class: "w-11/12" },
                        properties: { src: icons.footer.arrow }
                    }]
                }, {
                    tag: "div",
                    attributes: { class: "flex justify-center w-full items-center xsm:flex-col xsm:justify-center" },
                    children: [{
                        tag: iconBtn(icons.icons.WhatsApp),
                    }, {
                        tag: iconBtn(icons.icons.Instagram),
                    }, {
                        tag: iconBtn(icons.icons.LinkedIn),
                    }, {
                        tag: iconBtn(icons.icons.Telegram),
                    }]
                }],
            }, {
                tag: "div",
                attributes: { class: "container-item  w-full" },

            }]

        }]
    })
}