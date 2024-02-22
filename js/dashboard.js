import { authHandler } from "../utils/authorization.js";
import { getData } from "../utils/httpRequest.js";

const userContainer = document.querySelector(".dashboard-content_users");
const logoutBtn = document.querySelector(".logout-btn");
const searchInput = document.getElementById("dashboard-search");

let allData = null;

const showUserData = (data) => {
  userContainer.innerHTML = "";

  data.forEach((item) => {
    const dataJsx = `
    <div class="user row-flex">
      <div class="user-family">${item.name.firstname} ${item.name.lastname}</div>
      <div class="user-name">${item.username}</div>
      <div class="user-mail">${item.email}</div>
    </div>
    `;
    userContainer.innerHTML += dataJsx;
  });
};

const logoutHandler = () => {
  cookieStore.delete("Token");

  location.assign("../index.html");
};

const searchHandler = () => {
  const value = searchInput.value.toLowerCase().trim();

  if (!value) {
    showUserData(allData);
  }

  const filterDataByName = allData.filter((item) => {
    console.log(item);
    item.name.firstname.toLowerCase().includes(value);
  });
  showUserData(filterDataByName);

  const filterDataByEmail = allData.filter((item) =>
    item.email.toLowerCase().includes(value)
  );
  showUserData(filterDataByEmail);
};

const init = async () => {
  authHandler();

  allData = await getData("users");

  showUserData(allData);
};

document.addEventListener("DOMContentLoaded", init);

logoutBtn.addEventListener("click", logoutHandler);

searchInput.addEventListener("keyup", searchHandler);
