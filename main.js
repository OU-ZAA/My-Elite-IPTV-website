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

// Carousel
const swiper = new Swiper('.swiper', {
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