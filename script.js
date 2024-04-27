function openOptionActiveMenuOne(event) {
  const optionActiveMenuOne = document.querySelector("#option-active1");
  const elementDropImage1 = document.querySelector("#element-drop-image1");
  event.target.classList.toggle("open-menu");
  if (event.target.classList.contains("open-menu")) {
    optionActiveMenuOne.style.display = "initial";
    elementDropImage1.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    optionActiveMenuOne.style.display = "none";
    elementDropImage1.setAttribute("src", "images/icon-arrow-down.svg");
  }
}

const firstList = document.querySelector("#first-list");
firstList.addEventListener("click", (event) => {
  openOptionActiveMenuOne(event);
});

function openOptionActiveMenuTwo(event) {
  const optionActiveMenuTwo = document.querySelector("#option-active2");
  const elementDropImage2 = document.querySelector("#element-drop-image2");
  event.target.classList.toggle("open-menu");
  if (event.target.classList.contains("open-menu")) {
    optionActiveMenuTwo.style.display = "initial";
    elementDropImage2.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    optionActiveMenuTwo.style.display = "none";
    elementDropImage2.setAttribute("src", "images/icon-arrow-down.svg");
  }
}

const secondList = document.querySelector("#second-list");
secondList.addEventListener("click", (event) => {
  openOptionActiveMenuTwo(event);
});

const sideMenuOpenerBtn = document.querySelector("#side-menu-opener-btn");
sideMenuOpenerBtn.addEventListener("click", () => {
  sideBarMenu.style.width = 100+"%";
})

const sideBarMenu = document.querySelector("#sidebar-menu");

const menuHeaderImg = document.querySelector("#menu-header img");
menuHeaderImg.addEventListener("click", () => (sideBarMenu.style.width = 0+"%"));

const openMenuTodo = document.querySelector("#open-menu-todo");
openMenuTodo.addEventListener("click", (event) => {
  const menuTodoImg = document.querySelector("#menu-todo-img");
  const menuTodo = document.querySelector("#menu-todo");
  event.target.classList.toggle("todo");
  if (event.target.classList.contains("todo")) {
    menuTodoImg.setAttribute("src", "images/icon-arrow-up.svg");
    menuTodo.style.display = "initial";
  } else {
    menuTodoImg.setAttribute("src", "images/icon-arrow-down.svg");
    menuTodo.style.display = "none";
  }
});

const openMenuCompany = document.querySelector("#open-menu-company");
openMenuCompany.addEventListener("click", (event) => {
  const menuCompanyImg = document.querySelector("#menu-company-img");
  const menuCompany = document.querySelector("#menu-company");
  event.target.classList.toggle("menuCompany");
  if (event.target.classList.contains("menuCompany")) {
    menuCompanyImg.setAttribute("src", "images/icon-arrow-up.svg");
    menuCompany.style.display = "initial";
  } else {
    menuCompanyImg.setAttribute("src", "images/icon-arrow-down.svg");
    menuCompany.style.display = "none";
  }
});
