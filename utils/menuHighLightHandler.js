const menuHighLight = document.querySelector(".menu-anim");

const menuHighLightHandler = (data) => {
  menuHighLight.style.left = data.target.offsetLeft + "px";
  menuHighLight.style.width = data.target.offsetWidth + "px";
};

export default menuHighLightHandler;
