let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-active");
  menu.classList.toggle("show");
});
