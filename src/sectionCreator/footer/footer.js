import domGenerator from "dom-generator";
import icons from "../../datas/icons.json"
import { iconBtn } from "../../components/buttonComponent/iconBtn";
import "./footer.css"

/**
 * craete footer component by using domGenerator
 * @returns footer component
 */
export function footer() {
    return domGenerator({
        tag: "footer",
        attributes: { class: "bg-blue-dark p-5 " },
        children: [
            {
                tag: "div",
                attributes: { class: "container grid grid-cols-3 md:grid-cols-1 md:gap-5" },
                children: [{
                    tag: "div",
                    attributes: { class: "footer-item" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "flex flex-col justify-center items-center w-full xsm:-rotate-2" },
                            children: [{
                                tag: "img",
                                attributes: { class: "xsm:hidden w-32 h-40" },
                                properties: { src: icons.footer.avatar }
                            }, {
                                tag: "h1",
                                attributes: { class: "Grandstander-Medium text-4xl xsm:text-2xl font-bold text-center text-Beige mb-3 xsm:-rotate-3" },
                                properties: { textContent: "Giving Thanks" }
                            }, {
                                tag: "div",
                                attributes: { class: "flex flex-col justify-center text-Beige-dark gap-1" },
                                children: [{
                                    tag: "p",
                                    attributes: { class: "text-center text-xl xsm:text-lg" },
                                    properties: { textContent: "Get in touch:" }
                                }, {
                                    tag: "p",
                                    attributes: { class: "text-center text-base break-all" },
                                    properties: { textContent: "majidsheshbelooki@gmail.com" }
                                }]
                            }]
                        }, {
                            tag: "div",
                            attributes: { class: "container-item  w-full flex flex-col items-center md:w-fit" },
                            children: [{
                                tag: "div",
                                attributes: { class: "md:hidden w-60 h-56 pt-5" },
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
                        }]
                }, {
                    tag: "div",
                    attributes: { class: "container-item  w-full flex justify-center items-center" },
                    children: [{
                        tag: "p",
                        attributes: { class: "heebo-medium text-xl xsm: text-base text-Beige-dark -rotate-6 md:rotate-0 md:text-center" },
                        properties: { textContent: "Proficient in JavaScript jefwen  nfwnfeowkf elkjfoef f ejf gkrmg mfrgmv flckeoldmfgmg gvmokgrkgok gm rg rgvrgvo rrmmgmg mgmr mgllppwler ffgmkg wefmk fmewmrf  fefoekotwlr k fotkgmg q  tkghn" }

                    }]
                }],
            }]
    })
}