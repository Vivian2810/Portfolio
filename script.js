const body = document.body,
  scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

var offset = 0;

const imageveto = document.querySelector(".image-veto");
const carrousel = document.querySelector(".carrousel");

const carrouselSlide = document.querySelector(".carrousel-slide");
const carrouselImage = document.querySelectorAll(".carrousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");



//smoothScroll();
