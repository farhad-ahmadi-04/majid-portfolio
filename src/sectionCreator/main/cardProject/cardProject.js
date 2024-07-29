import domGenerator from 'dom-generator'
import './cardProject.css';


/**
 * create section component with dom generator and set style by tailwind
 * @returns element component
 */
export const cardProject = (obj) => {
    return domGenerator({
        tag: 'section',
        attributes: { class: 'p-5' },
        children: [{
            tag: 'div',
            attributes: { class: 'card-project--container' },
            children: [{
                tag: "div",
                attributes: { class: 'flex justify-center' },
                children: [{
                    tag: "img",
                    attributes: { class: "w-96" },
                    properties: { src: obj.src, alt: obj.pName === "" && "Project" }
                }]
            }, {
                tag: "div",
                attributes: { class: "card-project--texts" },
                children: [{
                    tag: "h1",
                    attributes: { class: "text-blue-dark text-4xl xsm:text-3xl font-bold mt-6 md:mt-0" },
                    properties: { textContent: obj.pName === "" && "Project Name" }
                }, {
                    tag: "p",
                    attributes: { class: "md:text-center text-blue-dark text-xl xsm:text-lg" },
                    properties: { textContent: obj.description === "" && "Aliqua et in dolore occaecat voluptate velit laboris amet laborum. Deserunt cillum et aliquip qui tempor cillum est. Labore id duis nulla deserunt culpa id ad." }
                }]
            }]
        }]
    })
}