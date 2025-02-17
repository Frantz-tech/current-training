document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:4000/data", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      displayData(data); // Fonction pour afficher les données dans le HTML
      console.log("Données reçues:", data);
    })
    .catch((error) => {
      console.error("Erreur GET :", error);
    });
});

function displayData(data) {
  const container = document.getElementById("data-container");

  // Vérification que l'élément existe
  if (!container) {
    console.error("Le container #data-container est introuvable.");
    return;
  }

  const user = data.user;
  if (Array.isArray(user)) {
    user.forEach((users) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `${users.nom} - ${users.prenom} - ${users.age}`;
      container.appendChild(div);
    });
  } else {
    container.innerHTML = "<p>Format de données invalide</p>";
  }
}

const formAdmin = document.querySelector("#formAdmin");
formAdmin.addEventListener("submit", (event) => {
  event.preventDefault();

  // Utilisation correcte de FormData
  const formData = new FormData(formAdmin);
  const data = {};

  // Conversion de FormData en un objet simple
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Données du formulaire :", data);

  // Envoie des données à l'API en POST
  fetch("http://localhost:4000/data", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Appelle directement displayData avec les données retournées
      console.log("Données reçues par POST:", data);
    })

    .catch((error) => {
      console.error("Erreur POST:", error);
    });
  fetch("http://localhost:4000/data", {
    method: "DELETE",

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // Appelle directement displayData avec les données retournées
      console.log("Données reçues par POST:", data);
    })

    .catch((error) => {
      console.error("Erreur POST:", error);
    });
});
