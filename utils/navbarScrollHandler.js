const navbar = document.querySelector(".navbar");
let lastScrollTop = null;

const navbarScrollHandler = (data) => {
  const scroll = data.documentElement.scrollTop;
  if (scroll > lastScrollTop) {
    navbar.style.top = `-80px`;
  } else {
    navbar.style.top = "0px";
  }
  lastScrollTop = scroll;
};
export default navbarScrollHandler;
