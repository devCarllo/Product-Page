"use strict";
import { getData } from "../utils/httpRequest.js";
import { imageZoomHandler } from "../utils/imageZoom.js";

const searchInput = document.getElementById("shope-search");
const productContainer = document.querySelector(".shope-container");
const categoryOption = document.querySelectorAll(".category-option");
const selectedProductContainer = document.querySelector(".buy-product");

let allProducts = null;

const closeProductHandler = () => {
  selectedProductContainer.innerHTML = "";
  selectedProductContainer.style.display = "none";
  selectedProductContainer.style.height = 0;
};

const showSelectedProduct = (data) => {
  selectedProductContainer.innerHTML = "";
  selectedProductContainer.style.display = "flex";
  selectedProductContainer.style.height = "auto";

  const filterSelectedProduct = allProducts.filter(
    (item) => item.id == data.dataset.id
  );

  filterSelectedProduct.forEach((item) => {
    const dataJsx = `
    <i class="fa-solid fa-xmark selected-product_icon"></i>

      <div class="selected-container row-flex">

        <div class="selected-image_container">
          <img src="${item.image}" class="selected-product_image">
        </div>

        <div class="selected-content_container column-flex">

          <div class="selected-category_container column-flex">
            <span class="selected-product_category">${item.category}</span>
            <span class="selected-product_title">${item.title}</span>
          </div>

          <div class="selected-rate_container row-flex">
            <span class="selected-product_rate"><i class="fa-solid fa-star"></i>${item.rating.rate}</span>
            <span class="selected-product_count">(${item.rating.count} buyer points)</span>
          </div>

          <div class="selected-des_container">
            <p class="selected-product_des">${item.description}</p>
          </div>

          <div class="selected-price_container row-flex">
            <span class="selected-product_price">$${item.price}</span>
            <button class="selected-product_btn">BUY</button>
          </div>
        
        </div>

      </div>
    `;
    selectedProductContainer.innerHTML += dataJsx;
  });

  imageZoomHandler();

  const selectedProductIcon = document.querySelector(".selected-product_icon");

  selectedProductIcon.addEventListener("click", closeProductHandler);
};

const buyProduct = (data) => {
  const product = document.querySelectorAll(".shope-product");

  product.forEach((item) => {
    item.children[2].children[1].children[1].addEventListener(
      "click",
      (event) => showSelectedProduct(item)
    );
  });
};

const showData = (data) => {
  productContainer.innerHTML = "";
  data.forEach((item) => {
    const dataJsx = `
        <div class="shope-product column-flex" data-id="${item.id}">
            <div class="shope-product_rate row-flex">
                <span class="shope-product_rating row-flex"><i class="fa-solid fa-star"></i> ${
                  item.rating.rate
                }</span>
                <span class="shope-product_count row-flex"><i class="fa-solid fa-user"></i> ${
                  item.rating.count
                }</span>
            </div>

            <div class="shope-image_container column-flex">

              <img src="${item.image}" class="shope-product_image row-flex">
                
            </div>

            <div class="shope-product_content column-flex">
              <span class="shope-product_title">${item.title
                .split(" ")
                .slice(0, 3)
                .join(" ")}</span>

                <div class="shope-product_buy row-flex">
                  <span class="shope-product_price">$${item.price}</span>   
                  
                  <button class="shope-product_btn">BUY</button
                </div>
            </div>

        <div>
    `;
    productContainer.innerHTML += dataJsx;
  });

  buyProduct(data);
};

const searchHandler = () => {
  const inputValue = searchInput.value.toLowerCase().trim();

  if (!inputValue) return showData(allProducts);

  const filteredProduct = allProducts.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );
  showData(filteredProduct);
};

const filterHandler = (event) => {
  const category = event.target.innerText.toLowerCase();

  categoryOption.forEach((item) => {
    if (category === item.innerText.toLowerCase()) {
      item.classList.add("category-active");
    } else {
      item.classList.remove("category-active");
    }
  });

  if (category === "all") return showData(allProducts);

  const filteredProduct = allProducts.filter(
    (item) => item.category.toLowerCase() === category
  );
  showData(filteredProduct);
};

const init = async () => {
  allProducts = await getData("products");

  showData(allProducts);
};

document.addEventListener("DOMContentLoaded", init);

searchInput.addEventListener("keyup", searchHandler);

categoryOption.forEach((item) => {
  item.addEventListener("click", filterHandler);
});
