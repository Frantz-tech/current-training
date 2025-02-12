const btnLoadData = document.querySelector(".btnLoadData");
const allData = document.querySelector(".allData");
let rick = "https://rickandmortyapi.com/api/character/?page=";

btnLoadData.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 1; i <= 42; i++) {
    fetch(rick + i)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.results.forEach((element) => {
          const div = document.createElement("div");
          allData.appendChild(div);

          const name = document.createElement("p");
          div.appendChild(name);
          name.textContent = element.name;

          const img = document.createElement("img");
          div.appendChild(img);
          img.src = element.image;
        });
      });
  }
});
