import domGenerator from "dom-generator";
import images from "../../../datas/images.json";
import "./about.css";

/**
 * create about section and set data
 * @returns element
 */
export default function about() {
    return domGenerator({
        tag: "section",
        attributes: { class: "about-section px-5 py-7 md:py-5" },
        children: [{
            tag: "div",
            attributes: { class: "container-about" },
            children: [{
                tag: "div",
                children: [{
                    tag: "img",
                    attributes: { class: "w-11/12" },
                    properties: { src: images.images.majid, alt: "Majid Ghashghaei" }
                }]
            }, {
                tag: "div",
                attributes: { class: "about-texts" },
                children: [{
                    tag: "h1",
                    attributes: { class: "text-center text-blue-dark text-5xl xsm:text-3xl font-bold" },
                    properties: { textContent: "Hellow" }
                }, {
                    tag: "p",
                    attributes: { class: "text-center text-blue-dark text-xl xsm:text-lg" },
                    properties: { textContent: "I`am majid sheshbelooki jjdksd djdjsbbyuer ivjfdocnoifvn duvjjf iiijfdwokp rokvdsv virov friojvii jif thsvn dmkmkfmk vmkmvmmw f em ‘UserInterFace Designer dkfncodkf odso ffmkd fne nffnfnfdknfkdkf fiojf fjjfi jfjeof fjijijfiwo f ffj je f efiof f ieolflkvnkdfnjgpe3t n mfvkfmkvmor ggorigoorgvmfdkvmkae[qepfmd;vmfmg pfmpaf  plefpw,fpf,mpfm " }
                }]
            }]
        }]
    })
}