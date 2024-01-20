// import iziToast from "izitoast";
// console.log(iziToast);
// iziToast.show({
//    theme: 'dark',
//   title: "Hey",
//   message: "What would you like to add?",
// });

// https://api.github.com/users/

// Navbar 
const homePageBtn = document.querySelector("#homePageBtn");
const aboutPageBtn = document.querySelector("#homeAboutPageBtn");

homePageBtn.addEventListener("click", homePageBtnFcn);
function homePageBtnFcn() {
   location.href = "./index.html"
}
aboutPageBtn.addEventListener("click", aboutPageBtnFcn);
function aboutPageBtnFcn() {
   location.href = "./about.html"
}

