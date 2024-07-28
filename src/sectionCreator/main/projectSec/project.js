import domGenerator from "dom-generator";
import images from "../../../datas/images.json"
import { swiper } from "./slider.js";
import "./project.css";

/**
 * create element (section) with dom-generator
 * @returns element
 */
export function project() {
    const project = domGenerator({
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
                attributes: { class: "swiper mySwiper" },
                children: [
                    {
                        tag: 'div',
                        attributes: { class: "swiper-wrapper flex w-3/5 items-center " },
                        children: [{
                            tag: 'div',
                            attributes: { class: "swiper-slide " },
                            children: [{
                                tag: 'img',
                                properties: { src: images.images.projects.p1, alt: "project" }
                            }]
                        }, {
                            tag: 'div',
                            attributes: { class: "swiper-slide " },
                            children: [{
                                tag: 'img',
                                properties: { src: images.images.projects.p1, alt: "project" }
                            }]
                        }, {
                            tag: 'div',
                            attributes: { class: "swiper-slide " },
                            children: [{
                                tag: 'img',
                                properties: { src: images.images.projects.p1, alt: "project" }
                            }]
                        }, {
                            tag: 'div',
                            attributes: { class: "swiper-slide " },
                            children: [{
                                tag: 'img',
                                properties: { src: images.images.projects.p1, alt: "project" }
                            }]
                        }, {
                            tag: 'div',
                            attributes: { class: "swiper-slide " },
                            children: [{
                                tag: 'img',
                                properties: { src: images.images.projects.p1, alt: "project" }
                            }]
                        },]

                    }, {
                        tag: 'div',
                        attributes: { class: "swiper-button-next" }
                    }, {
                        tag: 'div',
                        attributes: { class: "swiper-button-prev" }
                    }, {
                        tag: "div",
                        attributes: { class: "swiper-pagination" }
                    }]
            }]
        }]
    });

    document.body.appendChild(project);
    swiper()
    return project
}