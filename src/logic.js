const MENU = document.querySelector("#menu");
const BURGER = document.querySelector("#burger");

BURGER.addEventListener("click", () => {
  MENU.classList.toggle("hidden");
});
