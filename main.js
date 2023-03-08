// Navigation menu
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  navToggle
});

// Show carousel
const showSwiper = new Swiper('.showSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    "@1": {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 800
    "@1.5": {
      slidesPerView: 5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    "@2": {
      slidesPerView: 6,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// Feedback Carousel
const feedbackSwiper = new Swiper('.feedbackSwiper', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Accordion
const accordion = new Accordion('.accordion-container', {
  // animation duration in ms {number} 
  duration: 600, 
  // add ARIA elements to the HTML structure {boolean}
  ariaEnabled: true, 
  // allow collapse expanded panel {boolean}
  collapse: true, 
  // show multiple elements at the same time {boolean}
  showMultiple: false, 
  // disabling this option will find all items in the container {boolean}
  onlyChildNodes: true, 
  // show accordion elements during initialization {array}
  openOnInit: [], 
  // element class {string}
  elementClass: 'ac', 
  // trigger class {string}
  triggerClass: 'ac-trigger', 
  // panel class {string}
  panelClass: 'ac-panel', 
  // active element class {string}
  activeClass: 'is-active'
  
});