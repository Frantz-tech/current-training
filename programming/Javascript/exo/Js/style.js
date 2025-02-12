const menuBg = document.querySelector(".menuBg");

const navMenu = document.querySelector(".navMenu");

menuBg.addEventListener("click", () => {
  menuBg.classList.toggle("active");
  navMenu.classList.toggle("active");
});
