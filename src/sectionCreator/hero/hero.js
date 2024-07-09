import domGenerator from "dom-generator";
import "./hero.css";
import { icons } from "../../datas/icons.json"
import { iconBtn } from "../../components/buttonComponent/iconBtn";
import images from "../../datas/images.json"

export default function hero() {
    return (
        domGenerator(
            {
                tag: "section",
                attributes: { class: "heroSection bg-blue-dark px-5" },
                children: {
                    tag: "div",
                    attributes: { class: "container flex py-32 sm:py-16" },
                    children: [
                        {
                            tag: "div",
                            attributes: { class: "flex flex-col justify-center sm:hidden" },
                            children: [{
                                tag: iconBtn(icons.WhatsApp),
                            }, {
                                tag: iconBtn(icons.Telegram),
                            }, {
                                tag: iconBtn(icons.LinkedIn),
                            }, {
                                tag: iconBtn(icons.Instagram),
                            }]
                        },
                        {
                            tag: "div",
                            attributes: { class: "w-full flex items-center flex-col	justify-center" },
                            children: [
                                {
                                    tag: "div",
                                    attributes: { class: "flex items-center justify-center sm:flex-col sm:mb-8" },
                                    children: [
                                        {
                                            tag: "img",
                                            attributes: { src: images.portfolioText, alt: "", class: "w-3/5 sm:w-full" }
                                        },
                                        {
                                            tag: "h3",
                                            attributes: { class: "text-Beige-light text-xl sm:text-right sm:w-full sm:pr-0 sm:text-sm" },
                                            properties: { textContent: "Majid sheshbelooki" }
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    attributes: { class: "text-center border-2 p-3 rounded-lg border-slate-900" },
                                    children: [
                                        {
                                            tag: "h5",
                                            attributes: { class: "text-Beige-light xsm:text-sm" },
                                            properties: { textContent: "User Experience Designer" }
                                        },
                                        {
                                            tag: "h5",
                                            attributes: { class: "text-Beige-light xsm:text-sm" },
                                            properties: { textContent: "User InterFace Designer" }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        )
    )
}