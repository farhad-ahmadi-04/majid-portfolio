import domGenerator from 'dom-generator'

/**
 * create section component with dom generator and set style by tailwind
 * @returns element component
 */
export default function cardProject() {
    return domGenerator({
        tag: 'section',
        attributes: { class: 'p-5' },
        children: [{
            tag: 'div',
            attributes: { class: 'container' }
        }]
    })
}