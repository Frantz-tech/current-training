const FightersList = [
  {
    name: "Asuka Kazama",
    age: 16,
    size: 155,
    sexe: "Female",
    style: "Bagua Zhang Piqua Quan",
    atkname: "Xo Pi Qo",
    hp: 100,
    dmg: 13,
  },

  {
    name: "Azucena Ortiz",
    age: 21,
    size: 180,
    sexe: "Female",
    style: "Kazama Style Martial Arts",
    atkname: "Electric Wind Godfist",
    hp: 120,
    dmg: 18,
  },
  {
    name: "Bryan Furry",
    age: 21,
    size: 180,
    sexe: "Male",
    style: "Kazama Style Martial Arts",
    atkname: "Electric Wind Godfist",
    hp: 120,
    dmg: 18,
  },
  {
    name: "Jack",
    age: 21,
    size: 180,
    sexe: "Male",
    style: "Kazama Style Martial Arts",
    atkname: "Electric Wind Godfist",
    hp: 120,
    dmg: 18,
  },
  {
    name: "Jun Kazama",
    age: 49,
    size: 185,
    sexe: "Male",
    style: "Mishima Style Karate",
    atkname: "Electric Wind Godfist",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Lili",
    age: 75,
    size: 185,
    sexe: "Male",
    style: "Mishima Style Karate",
    atkname: "Atomic Blaster",
    hp: 140,
    dmg: 22,
  },
  {
    name: "Kazuya Mishima",
    age: 28,
    size: 185,
    sexe: "Male",
    style: "Kyokushin Karate",
    atkname: "Phoenix Smash",
    hp: 110,
    dmg: 15,
  },
  {
    name: "King",
    age: 32,
    size: 175,
    sexe: "Male",
    style: "Jeet Kune Do",
    atkname: "Law's Fury",
    hp: 100,
    dmg: 12,
  },
  {
    name: "Kuma",
    age: 16,
    size: 155,
    sexe: "Female",
    style: "Bagua Zhang Piqua Quan",
    atkname: "Xo Pi Qo",
    hp: 100,
    dmg: 13,
  },
  {
    name: "Hwaorang",
    age: 21,
    size: 180,
    sexe: "Male",
    style: "Kazama Style Martial Arts",
    atkname: "Electric Wind Godfist",
    hp: 120,
    dmg: 18,
  },
  {
    name: "Lee Shaolin",
    age: 49,
    size: 185,
    sexe: "Male",
    style: "Mishima Style Karate",
    atkname: "Electric Wind Godfist",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Leo",
    age: 75,
    size: 185,
    sexe: "Male",
    style: "Mishima Style Karate",
    atkname: "Atomic Blaster",
    hp: 140,
    dmg: 22,
  },
  {
    name: "Leroy Smith",
    age: 28,
    size: 185,
    sexe: "Male",
    style: "Kyokushin Karate",
    atkname: "Phoenix Smash",
    hp: 110,
    dmg: 15,
  },
  {
    name: "Lili",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Marshal Law",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Nina Williams",
    age: 32,
    size: 175,
    sexe: "Male",
    style: "Jeet Kune Do",
    atkname: "Law's Fury",
    hp: 100,
    dmg: 12,
  },
  {
    name: "Paul Phoenix",
    age: 17,
    size: 155,
    sexe: "Female",
    style: "Aikido",
    atkname: "Asuka's Fury",
    hp: 100,
    dmg: 12,
  },
  {
    name: "Reina",
    age: 25,
    size: 165,
    sexe: "Female",
    style: "Native American Martial Arts",
    atkname: "Julia's Rage",
    hp: 110,
    dmg: 15,
  },
  {
    name: "Sergei Dragunov",
    age: 30,
    size: 170,
    sexe: "Female",
    style: "Assassination Arts",
    atkname: "Nina's Fury",
    hp: 120,
    dmg: 18,
  },
  {
    name: "Shaheen",
    age: 28,
    size: 165,
    sexe: "Female",
    style: "Assassination Arts",
    atkname: "Anna's Rage",
    hp: 100,
    dmg: 12,
  },
  {
    name: "Steve Fox",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Xiaoyu",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Yoshimitsu",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Asuka Kazama",
    age: 40,
    size: 175,
    sexe: "Male",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
  {
    name: "Zafina",
    age: 40,
    size: 175,
    sexe: "Female",
    style: "Five Animals Style",
    atkname: "Lei's Fury",
    hp: 130,
    dmg: 20,
  },
];

class TekkenFighter {
  constructor(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
  }

  attaque(target) {
    if (target.hp > 0) {
      if (target.hp - this.dmg < 0) {
        target.hp = 0;
      } else {
        target.hp = target.hp - this.dmg;
      }
      return target.hp;
    }
  }
  checkWin() {
    if (this.hp > 0) {
      console.log(this.name + " a survecu " + this.hp + " hp restant");
    } else {
      buttonPlay.style.display = "none";
      setTimeout(() => {
        winPop.style.display = "flex";
      }, 2000);
      console.log("fin du combat " + FightersList3[0].name + " a gagné");
    }
  }
}

function changePlayer() {
  if (currentFighter === 1) {
    currentFighter = 2;
  } else {
    currentFighter = 1;
  }
}

function getName(name) {
  return name
    .replace(/url\(|\)/g, "")
    .replace(/"/g, "")
    .split("/")
    .pop()
    .split(".")
    .shift()
    .replace(/_/g, " ");
}
const winPop = document.getElementById("winPop");
const select = document.querySelectorAll(".select");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const name1 = document.getElementById("playerName1");
const name2 = document.getElementById("playerName2");
let vsLogo = document.getElementById("vsLogo");
let playButton = document.getElementById("buttonStart");
let clicknumb = 1;
let currentPlayer = 1;
let currentFighter = 1;

const FightersList2 = [];

FightersList.forEach((f) => {
  FightersList2.push(new TekkenFighter(f.name, f.hp, f.dmg));
});

const FightersList3 = [];
select.forEach((s, i) => {
  s.addEventListener("click", () => changeplayer(currentPlayer));
  function changeplayer(player) {
    const styles = window.getComputedStyle(s);
    if (clicknumb <= 1) {
      player1.style.backgroundImage =
        styles.getPropertyValue("background-image");
      setTimeout(() => {
        name1.innerHTML = getName(player1.style.backgroundImage);
      }, 1000);
      FightersList3[0] = FightersList2[i];
      currentPlayer = 2;
    } else if (clicknumb === 2) {
      player2.style.backgroundImage =
        styles.getPropertyValue("background-image");
      setTimeout(() => {
        name2.innerHTML = getName(player2.style.backgroundImage);
      }, 1000);
      FightersList3[1] = FightersList2[i];
      setTimeout(() => {
        vsLogo.style.display = "flex";
      }, 2000);
      setTimeout(() => {
        playButton.style.display = "flex";
      }, 2500);
      currentPlayer++;
    }
    clicknumb++;
  }
  select.forEach((s) => {
    s.addEventListener("mouseover", () => {
      switch (currentPlayer) {
        case 1:
          s.classList.add("selectedPerso1");
          break;
        case 2:
          s.classList.add("selectedPerso2");
          break;
        default:
          s.classList.add("noSelected");
          break;
      }
    });
  });
});

const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const startButton = document.getElementById("menuSlide");
const body = document.querySelector("body");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
startButton.addEventListener("click", () => {
  slide1.classList.add("slideLeft");
  slide2.classList.add("slideRight");
  slide3.classList.add("slideDown");
  setTimeout(() => {
    homePage.style.display = "none";
    document.querySelector(".top").style.zIndex = "-1";
  }, 2500);
});
const grilleslide1 = document.getElementById("grille1");
const grilleslide2 = document.getElementById("grille2");
const healthbar = document.querySelector(".healthbar");
const buttonPlay = document.getElementById("buttonAtk");
playButton.addEventListener("click", () => {
  grilleslide1.classList.add("slideLeft");
  grilleslide2.classList.add("slideRight");
  setTimeout(() => {
    playButton.classList.add("slideDown2");
  }, 2000);
  setTimeout(() => {
    player1.classList.add("slidePlayer");
    player2.classList.add("slidePlayer");
  }, 4000);
  setTimeout(() => {
    name1.classList.add("slideName");
    name2.classList.add("slideName");
    vsLogo.classList.add("slideName");
  }, 4000);
  setTimeout(() => {
    buttonAtk.style.display = "flex";
  }, 6500);
});

buttonPlay.addEventListener("click", () => {
  if (FightersList3[0].hp != 0 && FightersList3[1].hp != 0) {
    if (currentFighter === 1) {
      FightersList3[0].attaque(FightersList3[1]);
      FightersList3[1].checkWin();
      changePlayer();
    } else {
      FightersList3[1].attaque(FightersList3[0]);
      FightersList3[0].checkWin();
      changePlayer();
    }
  }
});
console.log(FightersList3);
