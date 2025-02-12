const homeBg = document.createElement("div");
const title = document.createElement("div");
homeBg.appendChild(title);
const titleTxt = document.createElement("p");
title.appendChild(titleTxt);
title.classList.add("h1");
titleTxt.classList.add("h1Txt");
const characters = document.createElement("div");
const firstCharacter = document.createElement("div");
const secondCharacter = document.createElement("div");
const btnAccueil = document.createElement("button");
const body = document.createElement("body");

homeBg.classList.add("homeBg");
characters.classList.add("characters");
firstCharacter.classList.add("firstCharacter");
secondCharacter.classList.add("secondCharacter");
document.body.appendChild(homeBg);
homeBg.appendChild(characters);
characters.appendChild(firstCharacter);
characters.appendChild(secondCharacter);
homeBg.appendChild(btnAccueil);
characters.style.visibility = "hidden";

document.querySelector("#story-container").style.visibility = "hidden";
document.querySelector("#story-container").style.height = "0%";

btnAccueil.classList.add("btnAccueil");
btnAccueil.id = "btnAccueil";
btnAccueil.innerText = "Jouer";

btnAccueil.addEventListener("click", () => {
  btnAccueil.style.animation = "fadeOut 1s";
  setTimeout(() => {
    btnAccueil.style.visibility = "hidden";
  }, 800);
  setTimeout(() => {
    titleTxt.innerText = "Chroniques d'Ether - AF Story";

    document.body.style.backgroundImage = "url('')";
  }, 1000);
  setTimeout(() => {
    characters.style.animation = "fadeIn 2s";
    characters.style.visibility = "visible";
    titleTxt.style.animation = "fadeIn 2s";
  }, 900);
});

firstCharacter.addEventListener("click", () => {
  character.innerText = "Neuvillette";
  started = true;
  setTimeout(() => {
    characters.style.animation = "fadeOut 1s";
    characters.style.visibility = "hidden";
    title.style.animation = "fadeOut 1s";
  }, 1000);
  setTimeout(() => {
    title.style.visibility = "hidden";
  }, 2000);

  setTimeout(() => {
    document.body.style.backgroundImage = "url('assets/img/background.gif')";
    document.querySelector("#story-container").style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    displayQuestionNeuvillette(0);
  }, 4000);
});
secondCharacter.addEventListener("click", () => {
  character.innerText = "Raiden Shogun";
  started = true;
  setTimeout(() => {
    characters.style.animation = "fadeOut 1s";
    characters.style.visibility = "hidden";
    title.style.animation = "fadeOut 1s";
  }, 1000);
  setTimeout(() => {
    title.style.visibility = "hidden";
  }, 2000);
  setTimeout(() => {
    document.body.style.backgroundImage = "url('assets/img/raidenShogun.gif')";
    document.querySelector("#story-container").style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    displayQuestionRaiden(0);
  }, 4000);
});
