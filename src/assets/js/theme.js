/**
 * Preloader
 */
let preloader = select("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

/**
 * Hero carousel indicators
 */
let heroCarouselIndicators = select("#hero-carousel-indicators");
let heroCarouselItems = select("#heroCarousel .carousel-item", true);

heroCarouselItems.forEach((item, index) => {
  index === 0
    ? (heroCarouselIndicators.innerHTML +=
        "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
        index +
        "' class='active'></li>")
    : (heroCarouselIndicators.innerHTML +=
        "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
        index +
        "'></li>");
});

$(document).ready(function () {
  $(".carousel").carousel({
    interval: 2000,
  });
});

/**
 * Clients Slider
 */
new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto", 
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/**
 * Testimonials slider
 */
new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

/**
 * Initiate Pure Counter
 */
