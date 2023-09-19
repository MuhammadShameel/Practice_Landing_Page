var swiper = new Swiper(".image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000, // Reduced delay for mobile
  },
});

window.addEventListener("load", function () {
  const element = document.querySelector(".fade-in");
  element.classList.add("active");
});

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("nav-toggle");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("nav-toggle");
};

AOS.init();
