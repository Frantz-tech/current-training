// const formulaire = document.querySelector("#mon-formulaire");

// formulaire.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(formulaire);
//   const name = formData.get("nom");
//   const prenom = formData.get("prenom");
//   console.log(name);
//   console.log(prenom);
//   document.querySelector("#nom").value = "";
//   document.querySelector("#prenom").value = "";
// });
const formulaire = document.querySelector("#mon-formulaire");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formulaire);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
