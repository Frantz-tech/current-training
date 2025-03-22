const dee = document.getElementById("imagesDe");
const button = document.getElementById("game");

button.addEventListener("click", (event) => {
  const random = Math.floor(Math.random() * 6) + 1;
  dee.src = `img/dice${random}.PNG`;
});
