import domGenerator from "dom-generator";
import { iconBtn } from "../../../components/buttonComponent/iconBtn";
import images from "../../../datas/images.json"
console.log(images.arrows.arrowLHero);

/**
 * create element (section) with dom-generator
 * @returns element
 */
export function project() {
    return domGenerator({
        tag: 'section',
        attributes: { class: 'p-5 bg-blue-pattern' },
        children: [{
            tag: 'h1',
            attributes: { class: "text-3xl font-bold text-Beige text-center mb-4 hidden md:block" },
            properties: { textContent: 'Projects' }
        }, {
            tag: 'div',
            attributes: { class: 'container' },
            children: [{
                tag: 'h1',
                attributes: { class: "text-3xl font-bold text-Beige text-center mb-4 md:hidden" },
                properties: { textContent: 'Projects' }
            }, {
                tag: "div",
                attributes: { class: "flex justify-between items-center" },
                children: [
                    {
                        tag: iconBtn({
                            src: images.arrows["arrow-l-portfolio"],
                            alt: "arrow icon left"
                        }, "md:hidden"),
                    }, {
                        tag: 'div',
                        attributes: { class: "flex justify-center items-center" },
                        children: [{
                            tag: 'img',
                            properties: { src: images.images.projects.p1, alt: "project" }
                        }, {
                            tag: 'img',
                            properties: { src: images.images.projects.p2, alt: "project" }
                        }, {
                            tag: 'img',
                            properties: { src: images.images.projects.p3, alt: "project" }
                        }, {
                            tag: 'img',
                            properties: { src: images.images.projects.p4, alt: "project" }
                        }]

                    }, {
                        tag: iconBtn({
                            src: images.arrows["arrow-r-portfolio"],
                            alt: "arrow icon left"
                        }, "md:hidden")
                    }]
            }]
        }]
    })
}