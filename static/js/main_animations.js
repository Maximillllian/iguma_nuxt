import { gsap } from "gsap";
import { DrawSVGPlugin } from '/node_modules/gsap/DrawSVGPlugin.js';
import { ScrollToPlugin } from '/node_modules/gsap/ScrollToPlugin.js';
import { TextPlugin } from '/node_modules/gsap/TextPlugin.js';
// import { ScrollTrigger } from ;

gsap.registerPlugin(DrawSVGPlugin, ScrollToPlugin, TextPlugin);

export default function animateMainPage() {

    // setups
    const darkMode = true;

    // Globals
    let black = '#00241b';
    let white = '#f5f5f5';
    let green = '#7ccf9e';
    let darkGreen = 'rgba(89, 145, 112)';

    let mobileMedia = window.matchMedia('screen and (max-width: 767px)');

    let logo = document.querySelector('#logo');
    let header = document.querySelector('header');
    let sections = gsap.utils.toArray('section');
    let headerNav = document.querySelector('header nav');


    // Scroll to top when reloading page
    window.onbeforeunload = () => {
        // window.scrollTo(0, 0);
        document.body.classList.remove('dark-mode');
    };

    // Fix height of navbar in mobile

    // function resetHeight(){
    //     // reset the body height to that of the inner browser
    //     headerNav.style.height = window.innerHeight + "px";
    // }
    // // reset the height whenever the window's resized
    // window.addEventListener("resize", resetHeight);
    // // called to initially set the height.
    // resetHeight();


    // Intro animation

    // Intro page

    let introSlider = document.querySelector('.intro')
    let introTextField = document.querySelector('.intro h1.code-text');
    let introButton = document.querySelector('.intro button')
    let introWords = ['аватар', 'DeepFake', 'цифровая_личность', 'метавселенная', 
                    'безопасность', 'цифровой_актив', 'Вы'];
    let igumaIs = document.querySelector('.intro .static');
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

    let sliderTl = gsap.timeline();
    sliderTl
            .to(igumaIs, {x: "0", opacity: 1, duration: .5, delay: .5})
            .to(introButton, {opacity: 1}, "0+=.75")


    let sliderWordsTl = gsap.timeline({repeat: -1});
    introWords.forEach(word => {
        let localTl = gsap.timeline({repeatDelay: .5, repeat: 1, yoyo: true});
        localTl.to(introTextField, {text: {value: word[0]+'.', delimiter: ""}, duration: .5});
        sliderWordsTl.add(localTl);
    });

    sliderTl.add(sliderWordsTl);

    // Intro main page

    let bannerTitle = document.querySelector('#banner .description h1');
    let bannerImage = document.querySelector('#banner .clip-img img');
    let bannerDescription = document.querySelector('#banner .description p');
    let beehivesFirst = gsap.utils.toArray('#banner .beehive-first img');
    let beehivesSecond = gsap.utils.toArray('#banner .beehive-second img');
    let unions = gsap.utils.toArray('#banner img.union');
    let telegramSVG = gsap.utils.toArray('.telegram .relationship');
    let telegramPath = gsap.utils.toArray('.telegram .relationship path');
    let telegramButton = document.querySelectorAll('.telegram .button-container');
    let wordsMonitor = document.querySelector('.words-monitor');
    let notBannerSection = gsap.utils.toArray('main section:not(:first-child)');

    let introTl = gsap.timeline({paused: true});
    introTl.to(window, {scrollTo: "0", duration: .25})
        .to(introSlider, {y: "100%", duration: .5})
        .call(() => introSlider.classList.toggle('hidden'))
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
        .from(wordsMonitor, {x: "100%", opacity: 0}, "startBeehives+=.3")
        .from(notBannerSection, {opacity: 0})
        .call(() => tokenomicsSection.style.removeProperty('opacity'));
    
    let startButton = document.querySelector('.intro button');
    startButton.addEventListener('click', () => {
        introTl.play();
    });

    // Burger menu animation

    function showBurgerMenu() {
        headerNav.classList.toggle('active');
        headerNav.classList.toggle('shadow');
        burger.classList.toggle('active');
    };

    let burger = document.querySelector('#burger');
    let main = document.querySelector('main');
    let navLinks = document.querySelectorAll('header nav a');

    if (mobileMedia.matches) {
    burger.addEventListener('click', () => showBurgerMenu());

    navLinks.forEach(link => {
        link.addEventListener('click', () => showBurgerMenu())
    });
    };

    // Words monitor in #banner (random show words in div)
    function randomNummberInRange(n) {
    let randomNumner = Math.ceil(Math.random() * n);
    return Number(randomNumner);
    };

    function chooseMonitorPlace() {
    let choosenMonitorTitle = wordsMonitorTitles[randomNummberInRange(3)-1];
    return choosenMonitorTitle;
    };

    function chooseMonitorWord() {
        let choosenWord = introWords[randomNummberInRange(introWords.length-1)];
        return String(choosenWord[0]);
    };

    function wordsMonitorAnimate() {
        let place = chooseMonitorPlace();
        let word =  chooseMonitorWord(); 
        let wordsMonitorTl = gsap.timeline({
            onComplete: wordsMonitorAnimate,
            defaults: {ease: "power4.out"}
            });
        wordsMonitorTl.to(place, {text: {value: word, delimiter: " "}, delay: 1, opacity: Math.random(), duration: .5})
                      .to(place, {text: {value: " ", delimiter: " "}, opacity: 0});
    };

    let wordsMonitorTitles = document.querySelectorAll('.words-monitor h2');

    wordsMonitorAnimate();

    // White bg to dark bg animation
    let burgerLines = gsap.utils.toArray('#burger div');
    let sphereSection = document.querySelector('section#sphere__section');
    let spherePaths = gsap.utils.toArray('#sphere__section path');
    let howToBuySection = document.querySelector('section#howToBuy');
    let blackLetters = logo.getElementById('#000000ff').querySelectorAll('path');
    blackLetters = gsap.utils.toArray(blackLetters);

    function toggleDarkButton() {
        telegramButton.forEach(el => {
            el.classList.toggle('btn');
            el.classList.toggle('dark-btn');
        })
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    
    window.addEventListener('scroll', () => {
        let sphereTop = sphereSection.getBoundingClientRect().top;
        let howToBuyTop = howToBuySection.getBoundingClientRect().top;
        
        // When scrolling to #sphere__section, colors changes to dark;
        if (darkMode) {
            if (sphereTop <= 200) {
                darkBgTl.play();
            } else {
                darkBgTl.reverse();
            }

            if (howToBuyTop <= 200) {
                darkBgTl.reverse();
            }
        }

        if (howToBuyTop <= 350) {
            howToButTl.play();
        }
    });


    let darkBgTl = gsap.timeline({
        defaults: {
            ease: "power1.out"
        },
        paused: true,
        onStart: toggleDarkMode,
        onReverseComplete: toggleDarkMode
    });

    darkBgTl.addLabel('start')
            // .fromTo('body', {background: white}, {background: black}, "start")
            // .to(sections, {background: black, color: white, stroke: green, fill: green}, "start")
            // .to(header, {background: black, color: green, borderBottom: '0px', ease: "power4.out"}, "start")
            .to(blackLetters, {fill: "var(--background)"}, "start")
            .from(spherePaths, {drawSVG: 0, ease: "power1.out"})
            // .to(burgerLines, {backgroundColor: white}, "start")
            // .to(telegramPath, {stroke: "var(--green)"}, "start")

    
    // HowToBuy Section animation
    let howToBuyPaths = gsap.utils.toArray('#howToBuy svg path');
    let howToBuyCircles = gsap.utils.toArray('#howToBuy svg circle');

    console.log(howToBuyCircles);
    console.log(howToBuyCircles.reverse());
    let howToButTl = gsap.timeline({paused: true, defaults: {
        ease: "ease1.out"
    }});
    howToButTl
            .set(howToBuyCircles, {attr: {'fill-opacity': 0}})
            // .from(howToBuyPaths, {drawSVG: 0, ease: "power1.out"})
            .to(howToBuyCircles, {attr: {'fill-opacity': 1}, duration: .5, stagger: 0.3})


    // Quote size calculating
    let quotes = document.querySelectorAll('#tokenomics svg.quote');
    let quoteBlock = document.querySelector('#tokenomics .quote-block p');
    let quoteBlockHeight = quoteBlock.clientHeight;

    quotes.forEach(el => {
        el.style.maxHeight = quoteBlockHeight + 'px';
        el.style.maxWidth = quoteBlockHeight * 1.46 + 'px';
    })
    
    // Donut chart animation
    // setTimeout(() => {
    //     let donutChart = document.querySelector('#tokenomics .mobile-chart svg');

    //     let transactionsPart = donutChart.querySelector('.ct-chart-donut .ct-series-a');
    //     let transactionsLegend = document.querySelector('#tokenomics .legend__item.transactions');
    //     let burnPart = donutChart.querySelector('.ct-chart-donut .ct-series-b');
    //     let burnLegend = document.querySelector('#tokenomics .legend__item.burn');
    //     let holdersPart = donutChart.querySelector('.ct-chart-donut .ct-series-c');
    //     let holdersLegend = document.querySelector('#tokenomics .legend__item.holders');
    //     let feePart = donutChart.querySelector('.ct-chart-donut .ct-series-d');
    //     let feeLegend = document.querySelector('#tokenomics .legend__item.fee');

    //     let chartArray = [
    //         [transactionsPart, transactionsLegend],
    //         [burnPart, burnLegend],
    //         [holdersPart, holdersLegend],
    //         [feePart, feeLegend]
    //     ];

    //     chartArray.forEach(el => {
    //         let part = el[0];
    //         let legend = el[1];

    //         legend.addEventListener('mouseenter', () => {
    //             part.style.opacity = 1;
    //         });
    //         legend.addEventListener('mouseleave', () => {
    //             part.style.opacity = .7;
    //         })
    //     })
    //   }, 1000);


    // Tokenomics Opacity Animation
    let tokenomicsSection = document.querySelector('#tokenomics');

    function showTokenomics() {
        let tokenomicsSectionTop = tokenomicsSection.getBoundingClientRect().top;
        
        if (tokenomicsSectionTop <= 400) {
            tokenomicsSection.classList.remove('transparent');  
        };
    }

    window.addEventListener('scroll', showTokenomics);


    // // My Roadmap slider
    // let roadmapTimeline = document.querySelector('#roadmap .timeline');
    // let timelineSlider = document.querySelector('#roadmap .timeline-slider');
    // let leftArrow = document.querySelector('#roadmap .arrows svg.left');
    // let rightArrow = document.querySelector('#roadmap .arrows svg.right');

    // // Get width of all timeline (with overflow)
    // let roadmapWidth = document.querySelector('#roadmap .timeline').scrollWidth;

    // // Get width of visible container  
    // let containerWidth = document.querySelector('#roadmap .roadmap__inner').clientWidth;

    // // Max scroll number 
    // let maxScroll = Math.floor(roadmapWidth / containerWidth);
    // let counter = {value: 1};

    // let roadmapTimelineGap = 40;
    // let cardWidth = 360;
    // let step = cardWidth * 2 + roadmapTimelineGap * 2;

    // // Listening changes of counter
    // let counterProxy = new Proxy(counter, {
    //     set: function (target, key, value) {
    //         target[key] = value

    //         if (value === 1) {
    //             leftArrow.classList.add('disabled');
    //             rightArrow.classList.remove('disabled');
    //         };
    //         if (value > 1) {
    //             leftArrow.classList.remove('disabled');
    //         }; 
    //         if (value > maxScroll) {
    //             leftArrow.classList.remove('disabled');
    //             rightArrow.classList.add('disabled');
    //         }; 
    //     }
    // })

    // leftArrow.addEventListener('click', () => {
    //     if (counterProxy.value === 1) {
    //         return
    //     }
    //     roadmapTimeline.style.transform = `translateX(0px)`;
    //     counterProxy.value -= 1;
    // })

    // rightArrow.addEventListener('click', () => {
    //     if (counterProxy.value > maxScroll) {
    //         return
    //     }
    //     roadmapTimeline.style.transform = `translateX(${step * -counterProxy.value}px)`;
    //     counterProxy.value += 1;
    //     // timelineSlider.style.overflowX = 'hidden';
    // })
}
