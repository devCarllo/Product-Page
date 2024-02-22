const counter = document.querySelectorAll(".counter-number");
const counterSection = document.querySelector(".count-product");

let start = false;

const counterHandler = (data) => {
  start = true;
  const countInterval = setInterval(() => {
    data.innerText++;

    if (data.innerText == data.dataset.count) {
      clearInterval(countInterval);
    }
  }, 2);
};

const counterNumber = (data) => {
  const height = counterSection.offsetTop - 564;
  if (window.scrollY >= height) {
    if (!start) {
      counter.forEach((item) => {
        counterHandler(item);
      });
    }
  }
};

export { counterNumber };
