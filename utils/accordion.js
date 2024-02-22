const button = document.querySelectorAll(".feature-btn");
const icon = document.querySelectorAll(".feature-btn i");
const content = document.querySelectorAll(".feature-content");

const closeHandler = () => {
  content.forEach((item) => (item.style.height = 0));
  button.forEach((item) => (item.style.color = `var(--titleColor)`));
  icon.forEach((item) => {
    item.classList.remove("fa-minus");
    item.classList.add("fa-plus");
  });
};

const accordionHandler = (event) => {
  closeHandler();
  console.dir(event);
  event.children[1].style.height = event.children[1].scrollHeight + "px";
  event.children[0].style.color = `var(--highlight)`;
  event.children[0].children[0].classList.remove("fa-plus");
  event.children[0].children[0].classList.add("fa-minus");
};

export { accordionHandler };
