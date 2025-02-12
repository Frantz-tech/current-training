const dee = document.getElementById("imagesDe");
const button = document.getElementById("game");

button.addEventListener("keydpress", (event) => {
  if (event === KeyH) {
    const random = Math.floor(Math.random() * 6) + 1;
    dee.src = `img/dice${random}.PNG`;
  }
});
