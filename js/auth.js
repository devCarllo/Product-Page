"use strict";
import { postData } from "../utils/httpRequest.js";
import { setCookie } from "../utils/cookie.js";
import { validation } from "../utils/validation.js";
import { authHandler } from "../utils/authorization.js";

const userNameInput = document.getElementById("login-user_name");
const userPassInput = document.getElementById("login-user_pass");
const loginBtn = document.getElementById("login-btn");

const loginHandler = async (event) => {
  event.preventDefault();

  const usernameValue = userNameInput.value;
  const passwordValue = userPassInput.value;
  const userData = {
    username: usernameValue,
    password: passwordValue,
  };
  const validate = validation(usernameValue, passwordValue);

  if (!validate) return false;

  const response = await postData(userData);

  setCookie(response.token);

  location.assign("../index.html");
};

const init = () => {
  authHandler();
};

document.addEventListener("DOMContentLoaded", init);
loginBtn.addEventListener("click", loginHandler);
