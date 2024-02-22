const splide1 = new Splide("#splide1", {
  type: "loop",
  perPage: 3,
  focus: 0,
  autoplay: true,
  speed: 1000,
  gap: 20,
  pagination: false,
  arrows: false,
  lazyLoad: "sequential",
});

const splide2 = new Splide("#splide2", {
  type: "loop",
  perPage: 4,
  focus: "center",
  autoplay: true,
  speed: 500,
  gap: 40,
  pagination: false,
  arrows: false,
});

export { splide1, splide2 };
