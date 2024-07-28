// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * create slider component with swiper library 
 * @returns - slider 
 */
export const swiper = () => {
    const translate = document.querySelectorAll('.swiper-slide')
    console.log(translate);
    translate.forEach((s, i) => {
        s.style.transform = `translateX(${i * -100}px)`;
    })
    // init Swiper:
    const swiperInstance = new Swiper('.swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    return swiperInstance;
}