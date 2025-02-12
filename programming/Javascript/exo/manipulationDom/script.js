// // // Exercice 1 :
// // // Créez une fonction qui prend en entrée l'âge d'une personne et affiche "Majeur" si l'âge est supérieur ou égal à 18, sinon affichez "Mineur".
// // agepersonne(18); // Affiche "Majeur"
// // agepersonne(16); // Affiche "Mineur"

// function agepersonne(age) {
//   if (age >= 18) {
//     console.log("Majeur");
//   } else {
//     console.log("Mineur");
//   }
// }
// // Exercice 2 :
// // Affichez les nombres pairs de 1 à 20 en utilisant une boucle for.
// function nbrPairs() {
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// }
// nbrPairs();

// // //
// // // Exercice 3 :
// // // Demandez à l'utilisateur de deviner un nombre entre 1 et 100. Utilisez une boucle while pour permettre à l'utilisateur de saisir des nombres jusqu'à ce qu'il devine correctement.

// const guessnumber = Math.floor(Math.random() * 100) + 1;
// let utilisateur = parseInt(prompt("Trouve le bon numéro"));
// while (true) {
//   if (utilisateur === guessnumber) {
//     alert("GG");
//     break;
//   } else if (utilisateur > guessnumber) {
//     utilisateur = parseInt(prompt("C'est moins"));
//   } else {
//     utilisateur = parseInt(prompt("C'est plus"));
//   }
// }

// // // Écrivez une fonction qui prend en entrée un mois (1 pour janvier, 2 pour février, etc.) et retourne le nombre de jours dans ce mois.
// // //  Assurez-vous de gérer correctement le cas de février pour les années bissextiles (29 jours) et non bissextiles (28 jours).

// function calendar(month, year) {
//   switch (month) {
//     case 2:
//       if (year % 4 === 0) {
//         console.log("Le mois contiens 29 jours");
//         return "29";
//       } else {
//         console.log("Le mois contiens 28 jours");
//         return "28";
//       }
//     case 4:
//       console.log("Le mois contiens 30 jours");
//       return "30";
//     case 6:
//       console.log("Le mois contiens 30 jours");
//       return "30";
//     case 9:
//       console.log("Le mois contiens 30 jours");
//       return "30";
//     case 11:
//       console.log("Le mois contiens 30 jours");
//       return "30";

//     default:
//       console.log("Le mois contiens 31 jours");
//       break;
//   }
// }
// calendar(2, 2096);

// // ##Exercices - Manipulation du DOM

// // Exercice 1 : Modification du contenu d'un élément
// // Ajoutez un bouton à votre page HTML et un paragraphe vide.
// // Lorsque vous cliquez sur le bouton, le texte "Hello, world!" doit être ajouté au paragraphe.

// const button = document.createElement("button");
// document.getElementById("container").appendChild(button);
// button.innerText = "Click pour faire apparaitre le paragraphe !";
// const para = document.createElement("p");
// document.getElementById("paraContainer").appendChild(para);
// button.addEventListener("click", () => {
//   para.innerText = "Hello, world!";
// });
// // ---
// // Exercice 2 : Modification de style
// // Ajoutez un bouton à votre page HTML et un paragraphe avec du texte.
// // Lorsque vous cliquez sur le bouton, changez la couleur du texte du paragraphe en rouge.

// const button2 = document.createElement("button");
// document.getElementById("container2").appendChild(button2);
// button2.style.width = "70px";
// button2.style.height = "70px";

// const para2 = document.createElement("p");
// document.getElementById("paraContainer2").appendChild(para2);
// para2.innerText = "Alexis m'aide dans mes démarches Javascript";

// button2.addEventListener("click", () => {
//   para2.style.color = "red";
// });
// // ---
// // Exercice 3 : Création d'éléments
// // Ajoutez un bouton à votre page HTML. Lorsque vous cliquez sur ce bouton,
// // un nouvel élément de type <li> doit être créé et ajouté à une
// // liste <ul> existante sur la page avec le texte "Nouvel élément".

// const button3 = document.createElement("button");
// document.getElementById("container3").appendChild(button3);
// button3.style.width = "120px";
// button3.style.height = "50px";

// const listul = document.createElement("ul");
// document.getElementById("paraContainer3").appendChild(listul);
// let clicknumb = 0;

// button3.addEventListener("click", () => {
//   if (clicknumb >= 5) {
//     alert("Nombre de clicks maximum atteints");
//     return;
//   }
//   const listli = document.createElement("li");
//   listli.innerText = "Nouvel élément";
//   listul.appendChild(listli);
//   clicknumb++;
// });

// // Exercice 4 : Suppression d'éléments
// // Ajoutez plusieurs éléments de type <li> à une liste <ul> sur votre page HTML.
// //  Ajoutez un bouton à la page. Lorsque vous cliquez sur ce bouton, le premier élément de la liste doit être supprimé.
// const body = document.body;
// const ulliste = document.createElement("ul");
// document.body.appendChild(ulliste);
// const button = document.createElement("button");
// document.body.appendChild(button);
// button.style.width = "50px";
// button.style.height = "50px";

// for (let i = 0; i < 8; i++) {
//   const liste = document.createElement("li");
//   liste.textContent = "elementtext";
//   ulliste.appendChild(liste);
// }
// /**
//  *
//  * @param {HTMLElement} liste
//  */
// function supprimer(liste) {
//   liste.removeChild(liste.firstElementChild);
// }
// button.addEventListener("click", () => supprimer(ulliste));

// // ---
// // Exercice 5 : Gestion d'événements multiples
// // Ajoutez trois boutons à votre page HTML, chacun ayant un identifiant unique.
// // Créez une seule fonction de gestionnaire d'événements JavaScript.
// // Lorsque vous cliquez sur l'un des boutons, un message s'affiche dans la console indiquant
// // l'identifiant du bouton sur lequel vous avez cliqué.
// const button1 = document.createElement("button");
// const message = document.createElement("p");
// document.body.appendChild(button1);
// button1.style.backgroundColor = "Blue";
// button1.style.height = "100px";
// button1.style.width = "100px";
// button1.style.margin = "20px";
// button1.addEventListener("click", () => {
//   document.body.appendChild(message);
//   message.innerText = "Vous avez cliqué sur le Bouton 1";
// });

// const button2 = document.createElement("button");
// document.body.appendChild(button2);
// button2.style.backgroundColor = "white";
// button2.style.height = "100px";
// button2.style.width = "100px";
// button2.style.margin = "20px";
// button2.addEventListener("click", () => {
//   document.body.appendChild(message);
//   message.innerText = "Vous avez cliqué sur le Bouton 2";
// });

// const button3 = document.createElement("button");

// document.body.appendChild(button3);
// button3.style.backgroundColor = "Red";
// button3.style.height = "100px";
// button3.style.width = "100px";
// button3.style.margin = "20px";
// button3.addEventListener("click", () => {
//   document.body.appendChild(message);
//   message.innerText = "Vous avez cliqué sur le Bouton 3";
// });
