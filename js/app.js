// Menu
const btnToggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav__overlay");
const navLinks = document.querySelectorAll(".nav__link");
const navClose = document.querySelector(".nav__link--close");

const openNav = e => {
  nav.classList.add("active");
};
const closeNav = e => {
  nav.classList.remove("active");
};

btnToggler.addEventListener("click", openNav);

[navOverlay, navClose, ...Array.from(navLinks)].forEach(item =>
  item.addEventListener("click", closeNav)
);

// HOME swiper
const swiperHome = new Swiper(".home.swiper-container", {
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// REVIEWS swiper
const swiperReviews = new Swiper(".reviews.swiper-container", {
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "cube",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize AOS
AOS.init();
