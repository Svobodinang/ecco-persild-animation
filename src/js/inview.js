import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
// import Swiper, { Navigation, Autoplay } from 'swiper';
// import data from '../data/basic.json';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default class Inview {
    constructor() {
        // scrollToTop
        setTimeout(() => {
            gsap.to(window, {
                scrollTo: 0,
                duration: 0.2
            });
        }, 0);

        this.addScrollTrigers();
        this.addInviewByScroll();
    }

    // eslint-disable-next-line
    addScrollTrigers() {
        // add scroll triggers
    }

    // eslint-disable-next-line
    addInviewByScroll() {
        // * base function for add inview
        // Array.from(document.querySelectorAll('.inview')).forEach((trigger) => {
        //     ScrollTrigger.create({
        //         trigger,
        //         start: 'top 90%',
        //         end: 'bottom top',
        //         onToggle: ({ isActive }) => {
        //             if (isActive) trigger.classList.add('entered');
        //         }
        // * add check if this block need paralla effect
        // onUpdate: ({ progress }) => {
        //     if (trigger.hasAttribute('parallax')) {
        //         trigger.style.setProperty('--parallax-progress', progress);
        //     }
        // }
        //     });
        // });
    }
}
