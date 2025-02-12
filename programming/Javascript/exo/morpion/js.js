const case1 = document.querySelector(".case1");
const case2 = document.querySelector(".case2");
const case3 = document.querySelector(".case3");
const case4 = document.querySelector(".case4");
const case5 = document.querySelector(".case5");
const case6 = document.querySelector(".case6");
const case7 = document.querySelector(".case7");
const case8 = document.querySelector(".case8");
const case9 = document.querySelector(".case9");

const cases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];

let choixJoueur = true;
let verifyCase1 = false;
let verifyCase2 = false;
let verifyCase3 = false;
let verifyCase4 = false;
let verifyCase5 = false;
let verifyCase6 = false;
let verifyCase7 = false;
let verifyCase8 = false;
let verifyCase9 = false;
// True représente le joueur avec les croix

case1.addEventListener("click", () => {
  if (!verifyCase1) {
    console.log("demo");
    if (choixJoueur == true) {
      case1.textContent = "X";
      choixJoueur = true;
      verifyCase1 = true;
    } else {
      case1.textContent = "O";
      choixJoueur = false;
      verifyCase1 = true;
    }
  }
     
});
