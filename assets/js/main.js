import iziToast from "izitoast";
import { SetNotificationErr } from "../js/notification";
// import { userDataPage } from "../js/Pageuser";

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
    } else {
      const data = await res.json();
      PageUppendfcn(data);
      console.log(data);
    }
  } catch (error) {}
}

const resultShowSection = document.querySelector("#resultShowSection");
async function PageUppendfcn(data) {
  const orgDate = data.created_at;
  const convertDate = new Date(orgDate).toDateString();

  resultShowSection.classList.remove("hidden");
  resultShowSection.innerHTML += `
   <div class="">
      <div class="flex justify-center">
        <img
          src="${data.avatar_url}"
          alt="profilepic"
          class="object-cover w-[260px] h-[260px] rounded-full"
        />
      </div>
      <div class="items-center">
        <div class="mt-7">
          <div
            class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-3 px-3 md:px-0"
          >
            <div
              class="bg-blue-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-solid fa-user-group"></i> Followers : <span>${
                data.followers
              }</span>
            </div>

            <div
              class="bg-teal-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-solid fa-heart"></i> Following : <span>${
                data.following
              }</span>
            </div>

            <div
              class="bg-sky-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-brands fa-github"></i> Public Repos : <span>${
                data.public_repos
              }</span>
            </div>

            <div
              class="bg-cyan-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-solid fa-clipboard"></i> Public Gists :
              <span>${data.public_gists}</span>
            </div>
            <div
              class="bg-indigo-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-solid fa-code"></i> hireable : <span>${
                data.hireable ? "Yes" : "No"
              }</span>
            </div>
            <div
              class="bg-violet-600 rounded text-center md:px-3 font-semibold mt-2 md:mt-0 px-2 w-full"
            >
              <i class="fa-brands fa-twitter"></i> twitter :
              <span>${
                data.twitter_username ? data.twitter_username : "Nope"
              }</span>
            </div>
          </div>
        </div>
      </div>

      <section class="container mx-auto mt-6">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 2xl:grid-cols-4 gap-4 text-center"
        >
          <div class="bg-gray-700 py-3 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              Name : <span class="text-graywhite">${data.name}</span>
            </h1>
          </div>
          <div class="py-3 bg-gray-700 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              <h1 class="font-semibold text-sky-600">
                Bio : <span class="text-graywhite">${
                  data.bio ? data.bio : "Not Provided"
                }</span>
              </h1>
            </h1>
          </div>
          <div class="py-3 bg-gray-700 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              Company :
              <span class="text-graywhite">${data.company}</span>
            </h1>
          </div>
          <div class="py-3 bg-gray-700 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              Location : <span class="text-graywhite">${data.location}</span>
            </h1>
          </div>
          <div class="py-3 bg-gray-700 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              Blog :
              <span class="text-graywhite">${
                data.blog ? data.blog : "Not Provided"
              }</span>
            </h1>
          </div>
          <div class="py-3 bg-gray-700 hover:bg-lightgray rounded">
            <h1 class="font-semibold text-sky-600">
              Member since : <span class="text-graywhite">${convertDate}</span>
            </h1>
          </div>
        </div>
      </section>


     </div>


     <div class="w-full">
        <div class="flex md:justify-end">
          <ul class="md:w-32 w-full text-center mt-3">
            <a href="${data.html_url}" target="_blank" rel="noopener noreferrer"
              ><li
                class="bg-ctmblue py-1 rounded text-gray-900 font-semibold hover:bg-teal-600"
              >
                Vist Profile
              </li></a
            >
          </ul>
        </div>
      </div>

   `;

  // Update Repo
  const updateRepoList = document.querySelector("#updateRepoList");

  const url = `https://api.github.com/users/${data.login}/repos`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((repo, index) => {
      //   console.log(repo);
        const orgdate = repo.updated_at;
        const date = new Date(orgdate).toLocaleString()
        updateRepoList.innerHTML += `
  
  <div class="bg-graydark p-3 rounded shadow hover:shadow-gray-400">
    <h3>
      <i class="fa-solid fa-box-archive"></i
      ><span class="text-ctnblue2 font-bold ml-2 hover:underline"
        ><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
          >${repo.name}</a
        ></span
      >
    </h3>
    <p class="text-xs ml-3 mt-2">
      ${repo.description ? repo.description : ""}
    </p>
    <div class="flex gap-x-3 mt-3 mb-2">
      <h1 class=""><i class="fa-regular fa-star text-green-600 mr-1"></i>${
        repo.stargazers_count
      }</h1>
      <h1 class=""><i class="fa-solid fa-code-fork text-ctmblue mr-1"></i></i>${
        repo.forks_count
      }</h1>
    </div>
    <h4 class="text-xs text-red-500">Last update: <span>${date}</span></h4>
  </div>
  `;
      });
    });
}

function searchValue(e) {
  if (inputUser.value != "") {
    getUserFcn(inputUser.value);
  } else {
    console.log("no data found");
    return false;
  }
}
