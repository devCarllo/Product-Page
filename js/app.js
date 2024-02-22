"use strict";
import menuHighLightHandler from "../utils/menuHighLightHandler.js";
import navbarScrollHandler from "../utils/navbarScrollHandler.js";
import { connectionHandler } from "../utils/testConnectionHandler.js";
import { animationTitle } from "../utils/titleAnimation.js";
import { getCookie } from "../utils/cookie.js";
import { getData } from "../utils/httpRequest.js";
import { counterNumber } from "../utils/countSection.js";
import { splide1 } from "../utils/sliders.js";
import { splide2 } from "../utils/sliders.js";
import { accordionHandler } from "../utils/accordion.js";

const menu = document.querySelectorAll(".menu");
const menuHighLight = document.querySelector(".menu-anim");
const loginButton = document.querySelector(".login-btn");
const dashboardButton = document.querySelector(".dashboard-btn");
const slideContainer = document.querySelector(".splide__list");
const featureAccordion = document.querySelectorAll(".feature-accordion");

const slider = (data) => {
  slideContainer.innerHTML = "";

  data.forEach((item) => {
    const dataJsx = `
    <li class="splide__slide">
      <div class="left-slide_container row-flex">
        <img class="slide-image row-flex" src="${item.image}">
      </div>

      <div class="right-slide_container">
        <div class="slide-rating">
          <span>${item.title.split(" ").slice(0, 3).join(" ")}</span>
          <span class="rate">${item.rating.rate}</span>
        </div>

        <div class="slide-price">
          <span>price: ${item.price}</span>
        </div>
      </div>
    </li>
    `;
    slideContainer.innerHTML += dataJsx;
  });
};

const firstMenuHandler = () => {
  menuHighLight.style.left = menu[0].offsetLeft + "px";
  menuHighLight.style.width = menu[0].offsetWidth + "px";
};

const init = async () => {
  const cookie = getCookie();
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }

  const presentData = await getData("products");

  slider(presentData);

  splide1.mount();

  splide2.mount();
};

// _____________EVENTS_____________

document.addEventListener("DOMContentLoaded", init);

firstMenuHandler();
menu.forEach((item) => {
  item.addEventListener("mouseenter", (event) => menuHighLightHandler(event));
});

window.addEventListener("scroll", (event) => navbarScrollHandler(event.target));

document.addEventListener("DOMContentLoaded", animationTitle);

document.addEventListener("DOMContentLoaded", connectionHandler);

window.addEventListener("scroll", (event) => counterNumber(event));

featureAccordion.forEach((item) =>
  item.addEventListener("click", (event) =>
    accordionHandler(event.target.parentElement)
  )
);
