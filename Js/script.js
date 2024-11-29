//* Navigation

let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

//* Nav Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollpase = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollpase.classList.remove("show");
  });
});
document.body.addEventListener("click", function () {
  navCollpase.classList.remove("show");
});

//* Counter Design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 1287, 10000);
  counter("count2", 1000, 3787, 3500);
  counter("count3", 0, 1440, 10000);
  counter("count4", 2500, 5115, 7000);
});

// ! GSAP

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".navbar-brand img", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

tl.from(
  ".navbar-nav .nav-item",
  {
    y: -100,
    opacity: 0,
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.2,
  },
  "-=0.8"
);

tl.from(
  ".main-btn",
  {
    scale: 0,
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  },
  "-=0.5"
);

tl.from(
  "#topBanner h1, #topBanner p",
  {
    opacity: 0,
    x: -100,
    scale: 0.95,
    rotation: 20,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.4,
  },
  "-=1.2"
);

// Image animation (simple ease-in effect)
gsap.from("#aboutImg img", {
  opacity: 0,
  x: -200,
  y: 50,
  scale: 0.95,
  rotation: 5,
  delay: 0.2,
  duration: 1.5,
  ease: "power2.out",  // Simple ease-in effect
  scrollTrigger: {
    trigger: "#aboutImg img",
    start: "top 75%",
    end: "bottom top",
    scrub: false,
    markers: false,
  },
});

// H2 animation (simple ease-in effect from the right)
gsap.from("#aboutText h2", {
  opacity: 0,
  x: 200,
  scale: 0.95,
  duration: 1.2,
  delay: 0.2,
  ease: "power2.out",  // Simple ease-in effect
  scrollTrigger: {
    trigger: "#aboutText",
    start: "top 75%",
    end: "bottom top",
    scrub: false,
    markers: false,
  },
});

// Paragraph animation (simple ease-in effect from the right)
gsap.from("#aboutText p", {
  opacity: 0,
  x: 200,
  scale: 0.95,
  duration: 1.2,
  delay: 0.2,
  ease: "power2.out",  // Simple ease-in effect
  scrollTrigger: {
    trigger: "#aboutText",
    start: "top 70%",
    end: "bottom top",
    scrub: false,
    markers: false,
  },
});

// List item animation (simple ease-in effect from the right)
gsap.from("#aboutText ul li", {
  opacity: 0,
  x: 200,
  scale: 0.95,
  duration: 1.2,
  delay: 0.2,
  ease: "power2.out",  // Simple ease-in effect
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#aboutText",
    start: "top 70%",
    end: "bottom top",
    scrub: false,
    markers: false,
  },
});


gsap.from("#storyText", {
  opacity: 0,
  scale: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: "#storyText",
    start: "top 80%",       
    end: "bottom top",     
    scrub: false,           
    markers: false,         
  },
});
