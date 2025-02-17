

let tl = gsap.timeline(); // Création de la timeline

// Animation des lettres avec effet "bounce"
const dropLetters = [".drop-m", ".drop-a", ".drop-e", ".drop-l"];
tl.to(dropLetters, {
    duration: 1.8,
    ease: "bounce.out",
    y: "60px",
    stagger: 0.2 // Chaque lettre tombe avec un léger décalage
});

// Animation du titre après les lettres
tl.to(".titre-nom", {
    duration: 1.8,
    ease: "power4.out",
    y: "60px"
}, "-=1.6"); // Commence un peu avant la fin de l'animation précédente

// Animation de la bordure
tl.to(".bordure-test", {
    x: "100%",
    duration: 1.8
}, "-=1.5"); // Commence aussi un peu avant la fin

// Liste des éléments qui doivent bouger en "elastic"
const elasticElements = [
    ".elastic-l", ".elastic-e1", ".elastic-f", ".elastic-e2",
    ".elastic-b", ".elastic-v", ".elastic-r", ".elastic-e3"
];

// Animation des lettres qui bougent en mode élastique
elasticElements.forEach((selector, index) => {
    tl.to(selector, {
        duration: 2.5,
        ease: "elastic.out(1,0.4)",
        x: "50px"
    }, 1 + index * 0.1) // Ajoute un petit délai pour chaque élément

        .to(selector, {
            duration: 2.5,
            ease: "elastic.out(1,0.4)",
            x: "0"
        }, 2.3 + index * 0.1); // Retour progressif
});

// Animation du bouton test
tl.to(".test-button", {
    duration: 2.5,
    ease: "elastic.out(1,0.4)",
    y: "150%"
}, "-=2"); // Commence avant la fin des animations élastiques


gsap
    .timeline({
        scrollTrigger: {
            trigger: ".trigger",
            scrub: 0.5,
            pin: true,
            start: "top top",
            end: "+=180%",
            delay: 2,
        }
    })
    .to(".box", {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 },
    })
    .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
    .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: ".main",
        pinSpacing: true,
        scrub: 1,
        end: "+=3000",
    }
});

gsap.to('.next-block',{
    backgroundColor:'tomato',
    scrollTrigger:{
        trigger:'.next-block',
        pinnedContainer: ".main",
        start:'top 50%',
        toggleActions: 'play none reset none',
    }
})






