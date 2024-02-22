const textContainer = document.getElementById("title");
const text = "KaviR Shope";
let index = 0;
let timing = 0;

const animationTitle = () => {
  setTimeout(() => {
    const addLetter = setInterval(() => {
      if (index < text.length) {
        textContainer.innerHTML += text[index];
        index++;
      }

      if (index == text.length) {
        clearInterval(addLetter);
      }
    }, 100);

    const timeInterval = setInterval(() => {
      textContainer.classList.add("animation-title");
      timing++;

      if (timing == 3) {
        textContainer.classList.remove("animation-title");
        clearInterval(timeInterval);
      }
    }, 2000);
  });
};

setInterval(() => {
  index = 0;
  timing = 0;
  textContainer.innerHTML = "";
  animationTitle();
}, 6500);

export { animationTitle };
