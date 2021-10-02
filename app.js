import { DrawSVGPlugin } from './node_modules/gsap/DrawSVGPlugin.js';
import { ScrollToPlugin } from './node_modules/gsap/ScrollToPlugin.js';
import { TextPlugin } from './node_modules/gsap/TextPlugin.js';

gsap.registerPlugin(DrawSVGPlugin, ScrollToPlugin, TextPlugin);

let black = '#00241b';
let white = '#f5f5f5';
let green = '#7ccf9e';

let logo = document.querySelector('#logo');
let header = document.querySelector('header');
let sections = gsap.utils.toArray('section');


// Scroll to top when reloading page
window.onbeforeunload = () => {
    window.scrollTo(0, 0)
};


// Intro animation

// Intro page

let introTextField = document.querySelector('.intro h1');
let introWords = ['NFT', 'аватар', 'DeepFake', 'Digital', 'Human', 'метавселенная'];
let colors = [white, green];


function shuffleArrayWithColor(array, colors) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    for (let i = array.length - 1; i >= 0; i--) {
        let binaryJ = Math.round(Math.random());
        array[i] = [array[i], colors[binaryJ]]
    }
}


shuffleArrayWithColor(introWords, colors);
console.log(introWords);
let sliderTl = gsap.timeline({repeat: -1, paused: true});
introWords.forEach(word => {
    let localTl = gsap.timeline({yoyo: true, repeat: 1, repeatDelay: 1});
    localTl.to(introTextField, {text: word[0], color: word[1], duration: .5, delay: .5});
    sliderTl.add(localTl);
});

sliderTl.play();

// Intro main page

let startButton = document.querySelector('.intro button');
startButton.addEventListener('click', () => introTl.play());

let introSlider = document.querySelector('.intro')
let bannerTitle = document.querySelector('#banner .description h1');
let bannerImage = document.querySelector('#banner .clip-img img');
let bannerDescription = document.querySelector('#banner .description p');
let beehivesFirst = gsap.utils.toArray('#banner .beehive-first img');
let beehivesSecond = gsap.utils.toArray('#banner .beehive-second img');
let unions = gsap.utils.toArray('#banner img.union');
let telegramSVG = document.querySelector('#banner .telegram svg');
let telegramPath = document.querySelector('#banner .telegram path');
let telegramButton = document.querySelector('#banner .telegram a');
let notBannerSection = gsap.utils.toArray('main section:not(:first-child)');

let introTl = gsap.timeline({paused: true});
introTl.to(window, {scrollTo: "0", duration: .25})
       .to(introSlider, {y: "100%", duration: .5})
       .from(bannerTitle, {x: "-100%", y: "0", opacity: 0})
       .from(bannerDescription, {x: "-100%", y: "0", opacity: 0}, "-=.35")
       .from(bannerImage, {x: "100%", opacity: 0}, "-=.35")
       .from(unions, {x: "-100%", opacity: 0, stagger: .15}, "-=.35")
       .addLabel('startBeehives')
       .from(beehivesFirst, {opacity: 0, stagger: .1}, "startBeehives-=.35")
       .from(beehivesSecond, {opacity: 0, stagger: .1}, 'startBeehives-=.3')
       .from(header, {y: "-100%", opacity: 0}, "startBeehives-=.35")
       .from(telegramSVG, {y: "100%", opacity: 0}, "startBeehives-=.35")
       .from(telegramPath, {drawSVG: "0%"}, "startBeehives")
       .from(telegramButton, {opacity: 0}, "startBeehives+=.3")
       .from(notBannerSection, {opacity: 0});

// White bg to dark bg animation
let sphereSection = document.querySelector('#spheres');
let spherePaths = gsap.utils.toArray('#spheres path');
let blackLetters = logo.getElementById('#000000ff').querySelectorAll('path');
blackLetters = gsap.utils.toArray(blackLetters);



let darkBgTl = gsap.timeline({
    scrollTrigger: {
        trigger: sphereSection,
        scrub: true,
        start: "top center",
        end: "center center"
    },
    defaults: {
        ease: Power4.easeOut
    }
});
darkBgTl.to(sections, {background: black, color: white, stroke: green, fill: green, ease: Power4.easeOut})
        .to(header, {backgroundColor: black, color: green, borderBottom: '0px'}, 0)
        .to(blackLetters, {fill: "var(--background)"}, 0)
        .from(spherePaths, {drawSVG: 0})
