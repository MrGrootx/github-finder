import iziToast from "izitoast";
import { SetNotificationErr } from "../js/notification";

// console.log(iziToast);

// https://api.github.com/users/

const API = "https://api.github.com/users/";

// Navbar
const homePageBtn = document.querySelector("#homePageBtn");
const aboutPageBtn = document.querySelector("#homeAboutPageBtn");

homePageBtn.addEventListener("click", homePageBtnFcn);
function homePageBtnFcn() {
  location.href = "./index.html";
}
aboutPageBtn.addEventListener("click", aboutPageBtnFcn);
function aboutPageBtnFcn() {
  location.href = "./about.html";
}

const inputUser = document.querySelector("#inputSearch");
const SearchBtn = document.querySelector("#SearchBtn");

SearchBtn.addEventListener("click", searchValue);

// Disabling Btn if no input
inputUser.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  SearchBtn.disabled = false;

  if (value === "") {
    SearchBtn.disabled = true;
  }
});

async function getUserFcn(username) {
  //   console.log(inputUser.value);

  try {
    const res = await fetch(API + username);
    const notification = document.querySelector("#notification");
    if (!res.ok) {
      if (res.status === 404) {
        console.log("User not found");

        SetNotificationErr(false, "User not Found", 5000, "#222831", "#00ADB5");

        inputUser.value = "";
      }
      return;
    }

    const data = await res.json();
    console.log(data);
    //  console.log(data);
  } catch (error) {}
}

function searchValue(e) {
  if (inputUser.value != "") {
    getUserFcn(inputUser.value);
  } else {
    console.log("no data found");
    return false;
  }
}
