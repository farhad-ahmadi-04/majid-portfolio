/**
 * create render function for getting rnder to elements
 * @param {Element} ele1 - The first element
 * @param {Element} ele2 - The second element for append to ele1
 */
export default function render(ele1, ele2) {
    ele1.appendChild(ele2);
}