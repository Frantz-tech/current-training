const storyDataNeuvillette = [
  {
    question:
      "Neuvillette doit juger un cas où un citoyen accuse une Mélusine de vol. Comment réagit-il ?",
    choices: [
      {
        text: "Faire une enquête approfondie pour découvrir la vérité",
        nextQuestion: 1,
      },
      {
        text: "Rendre un jugement rapide basé sur les premières preuves",
        nextQuestion: 2,
      },
    ],
  },
  {
    question:
      "Neuvillette trouve un artefact ancien capable de contrôler l'eau. Que doit-il faire ?",
    choices: [
      {
        text: "Utiliser l'artefact pour améliorer la sécurité de Fontaine",
        nextQuestion: 3,
      },
      {
        text: "Sceller l'artefact pour éviter toute catastrophe",
        nextQuestion: 4,
      },
    ],
  },
  {
    question:
      "Un groupe de Mélusines réclame plus de droits civiques à Fontaine. Neuvillette doit-il leur accorder ces droits ?",
    choices: [
      {
        text: "Accorder plus de droits pour maintenir la paix",
        nextQuestion: 5,
      },
      { text: "Refuser et maintenir le statu quo", nextQuestion: 6 },
    ],
  },
  {
    question:
      "Une mystérieuse organisation propose son aide pour la protection de Fontaine contre les inondations. Que fait Neuvillette ?",
    choices: [
      {
        text: "Accepter l'alliance pour assurer la sécurité de la ville",
        nextQuestion: 7,
      },
      {
        text: "Refuser et compter sur les ressources internes de Fontaine",
        nextQuestion: 8,
      },
    ],
  },
  {
    question:
      "Un cas délicat se présente où une Mélusine a été accusée de sabotage. Que fait Neuvillette ?",
    choices: [
      {
        text: "Protéger la Mélusine jusqu'à ce que la vérité éclate",
        nextQuestion: 9,
      },
      {
        text: "Faire confiance aux preuves et juger rapidement",
        nextQuestion: 10,
      },
    ],
  },
  {
    question:
      "Neuvillette doit juger un cas impliquant une trahison de la part d'un noble influent. Comment réagit-il ?",
    choices: [
      {
        text: "Faire respecter la loi sans distinction de statut",
        nextQuestion: 11,
      },
      {
        text: "Adoucir la sentence pour préserver l'ordre social",
        nextQuestion: 12,
      },
    ],
  },
  {
    question:
      "Une rumeur dit que Neuvillette cacherait sa véritable identité de Dragon Hydro. Que fait-il ?",
    choices: [
      {
        text: "Révéler la vérité pour gagner la confiance des citoyens",
        nextQuestion: 13,
      },
      {
        text: "Maintenir le secret pour préserver l'équilibre de Fontaine",
        nextQuestion: 14,
      },
    ],
  },
  {
    question:
      "Un ancien ennemi de Fontaine revient dans la ville. Comment Neuvillette réagit-il ?",
    choices: [
      {
        text: "Accueillir l'ennemi avec prudence mais sans violence",
        nextQuestion: 15,
      },
      {
        text: "Le confronter immédiatement pour éviter tout conflit futur",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Les citoyens de Fontaine sont de plus en plus inquiets des inondations. Que doit faire Neuvillette ?",
    choices: [
      {
        text: "Mettre en place un plan d'urgence pour prévenir les inondations",
        nextQuestion: 15,
      },
      {
        text: "Chercher une solution magique plus audacieuse",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Un ancien artefact, très puissant, est trouvé sous Fontaine. Que doit faire Neuvillette ?",
    choices: [
      {
        text: "Étudier l'artefact et l'utiliser pour protéger la ville",
        nextQuestion: 15,
      },
      {
        text: "Sceller l'artefact pour éviter toute catastrophe",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "La stabilité de Fontaine est menacée par une rébellion populaire. Comment Neuvillette réagit-il ?",
    choices: [
      {
        text: "Utiliser la force pour réprimer la rébellion",
        nextQuestion: 15,
      },
      {
        text: "Négocier avec les rebelles pour apaiser la situation",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Une inondation massive est imminente, et une décision doit être prise. Que fait Neuvillette ?",
    choices: [
      {
        text: "Utiliser l'artefact Hydro pour stopper l'inondation",
        nextQuestion: 15,
      },
      {
        text: "Chercher une solution plus traditionnelle avec les ingénieurs",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Neuvillette découvre un complot contre le gouvernement de Fontaine. Comment doit-il réagir ?",
    choices: [
      {
        text: "Enquêter et éliminer les conspirateurs discrètement",
        nextQuestion: 15,
      },
      {
        text: "Informer le public et agir de manière transparente",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Les Mélusines souhaitent aider Neuvillette à gérer les affaires de la ville. Que doit-il faire ?",
    choices: [
      {
        text: "Accepter leur aide pour renforcer l'efficacité de la gestion",
        nextQuestion: 15,
      },
      {
        text: "Refuser leur aide pour préserver son autorité",
        nextQuestion: 15,
      },
    ],
  },
  {
    question:
      "Un ancien artefact Hydro puissant menace de ravager Fontaine. Que doit faire Neuvillette ?",
    choices: [
      {
        text: "Tenter de contrôler l'artefact pour son propre usage",
        nextQuestion: 15,
      },
      { text: "Le détruire pour éviter tout danger", nextQuestion: 15 },
    ],
  },
  {
    question:
      "Fin de l'histoire. Merci d'avoir exploré les choix de Neuvillette.",
    choices: [],
  },
];
const storyDataRaiden = [
  {
    question:
      "Raiden reçoit une lettre mystérieuse de quelqu'un se disant prisonnier à Meropide, clamant une menace imminente.",
    choices: [
      {
        text: "Décoder immédiatement la lettre pour en apprendre plus",
        nextQuestion: 2,
      },
      {
        text: "Demander a Corinde de vous aider à décrypter le message",
        nextQuestion: 1,
      },
      {
        text: "Ignorer la lettre et la considerer comme un diversion",
        nextQuestion: "",
      },
    ],
  },
  {
    question:
      "Vous découvre que le prisionnier mentionné est un certait 'Ezarn' ",
    choices: [
      {
        text: "Interroger Ezarn directement dans sa cellule",
        nextQuestion: 3,
      },
      {
        text: "Consulter les archives pour vérifier le passé d'Ezarn",
        nextQuestion: 2,
      },
    ],
  },
  {
    question:
      "Ezarn est un ancien chercher de fontaine, arrêté pour espionnage",

    choices: [
      {
        text: "Partir interroger Ezarn",
        nextQuestion: 3,
      },
    ],
  },
  {
    question:
      " Ezarn révèle que son travail impliquait une expérience sur un 'coeur abyssal' et qu'un groupe de mercenaire cherche à s'en emparer",
    choices: [
      {
        text: "Creuser plus profondémment pour comprendre le lien entre Meropide et cet expérience",
        nextQuestion: 4,
      },
      {
        text: " Emettre un avis d'alerte pour renforcer la sécurité de la forteresse",
        nextQuestion: 5,
      },
    ],
  },
  {
    question:
      "il vous explique qu'un agent infiltré au sein de la forteresse tente de saboter les dispositifs de sécurité",

    choices: [
      {
        text: "Croire Ezarn et emettre un avis d'alerte pour renforcer la sécurité de Meropide",
        nextQuestion: 5,
      },
      {
        text: "Traquez immediatement le saboteur avec l'aide des gardes",
        nextQuestion: 5,
      },
      {
        text: "laisser le saboteur en liberté pour suivre ses mouvements",
        nextQuestion: 5,
      },
    ],
  },
  {
    question: "Vous avez retrouvez le saboteur, que decidez vous ?",

    choices: [
      {
        text: "Le menacer de le balancer dans la fosse au requins",
        nextQuestion: 6,
      },
      {
        text: "Appelez des renforts ",
        nextQuestion: 7,
      },
      {
        text: " Soutirer des informations au saboteur",
        nextQuestion: 8,
      },
    ],
  },
  {
    question:
      "Le saboteur n'ayant pas envie de finir en boullie se livre a vous",
    choices: [
      {
        text: "Ecoutez ses paroles",
        nextQuestion: 8,
      },
    ],
  },
  {
    question:
      "Le saboteur désormais entouré de la garde de la forteresse n'as plus le choix que de donner des infos",
    choices: [
      {
        text: "Ecoutez ses paroles",
        nextQuestion: 8,
      },
    ],
  },
  {
    question:
      "Le saboteur révèle qu'il agit pour le compte d'un groupe appelé les 'Echos de l'Abysse' ",
    choices: [
      {
        text: "Infiltrer leurs cachette grâce aux informations du saboteur",
        nextQuestion: 9,
      },
      {
        text: " Préparer une attaque préventive contre leurs base ",
        nextQuestion: 10,
      },
      {
        text: " Contacter les chevaliers de Fontaine pour demander des renforts",
        nextQuestion: 11,
      },
    ],
  },
  {
    question: " Vous êtes enfin arrivé dans la base ennemi",
    choices: [
      {
        text: "Saboter leurs plans en détruisant leurs équipements",
        nextQuestion: 12,
      },
      {
        text: " Capturer un des lieutenants pour obtenir des informations critique",
        nextQuestion: 13,
      },
    ],
  },
  {
    question:
      "Les Echos de l'Abysse se préparent à voler le 'coeur abyssal', une source de puissance destructrice",
    choices: [
      {
        text: "Affronter directement leurs chef",
        nextQuestion: 14,
      },
    ],
  },
  {
    question:
      " Les Chevaliers vous répondent qu'ils sont tous parti au Sud et qu'il ne sauront pas la à temps, il vous faut donc agir seul",
    choices: [
      {
        text: "Prendre les choses en main",
        nextQuestion: 10,
      },
    ],
  },
  {
    question:
      " Felicitation, vous avez Réussit à repousser l'attaque de l'Echo de l'Abysse !",
    choices: [
      {
        text: "Retourner à la forteresse",
        nextQuestion: 19,
      },
    ],
  },
  {
    question:
      "Le chef des Echos apparait devant vous, prêt a sacrifier son lieutnant pour récuperer le coeur.",
    choices: [
      {
        text: " L'affronter directement pour mettre fin à la menace",
        nextQuestion: 14,
      },
      {
        text: "Negocier une trêve pour épargner les innocents",
        nextQuestion: 15,
      },
      {
        text: "Détruire le coeur abyssal sur place, quoi qu'il en coute",
        nextQuestion: 17,
      },
    ],
  },
  {
    question:
      "Après plusieurs heures de combats, vous arrivez finalement à vaincre le Chef de l'Echo de l'Abysse",
    choices: [
      {
        text: "Retourner a Meropide",
        nextQuestion: 19,
      },
    ],
  },
  {
    question:
      "Le chef ne souhaitant pas abandonner la chasse pour le coeur abyssal, vous propose un marché. Il vous demande en échange que vous lui donnez votre précieuse épée. ",
    choices: [
      {
        text: " J'accepte ",
        nextQuestion: 16,
      },
      {
        text: "Je refuse ( cela va automatiquement vous faire combattre le Chef de l'Echo de l'Abysse) ",
        nextQuestion: 14,
      },
    ],
  },
  {
    question:
      " Vous avez certes perdu votre épée mais avez sauvé la vie de centaines, voir de millers d'innocent. Votre patience et votre détermination on fait que vous avez gérez au mieux la situation sans en venir au combat. ",
    choices: [
      {
        text: " Retourner à Meropide",
        nextQuestion: 19,
      },
    ],
  },
  {
    question:
      "Malgré votre Ultime, vous n'avez pas réussit à détruire le coeur... Vous n'avez plus le choix, fuire ou vous battre. Qu'allez vous faire ?",
    choices: [
      {
        text: "Se défendre contre le Lieutnant et le Chef ",
        nextQuestion: 18,
      },
    ],
  },
  {
    question:
      " Après plusieurs heures de combats, vous arrivez finalement à vaincre le lieutnant ainsi que Chef de l'Echo de l'Abysse ",
    choices: [
      {
        text: "Rentrer à Méropide",
        nextQuestion: 19,
      },
    ],
  },
  {
    question:
      "Fin de l'histoire. Merci d'avoir exploré les choix de Raiden Shogun.",
    choices: [],
  },
];

let typedInstance;

function displayQuestionNeuvillette(index) {
  console.log(index, storyDataNeuvillette.length);
  if (index >= storyDataNeuvillette.length - 1) {
    endStoryNeuvillette();
  } else {
    const choicesContainer = document.getElementById("choices");

    const currentQuestion = storyDataNeuvillette[index];

    if (typedInstance) {
      typedInstance.destroy();
    }

    const options = {
      strings: [currentQuestion.question],
      typeSpeed: 2,
      showCursor: false,
    };

    typedInstance = new Typed("#dialog", options);
    console.log(typedInstance);

    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerHTML = `
                <div class="choices-container animate__fadeIn">
                    <img src="assets/img/msg.png" alt"msg" /> 
                    <p>${choice.text}</p>
                </div>
            `;
      button.addEventListener("click", () => {
        displayQuestionNeuvillette(choice.nextQuestion);
      });
      choicesContainer.appendChild(button);
    });
  }
}
function displayQuestionRaiden(index) {
  console.log(index, storyDataRaiden.length);
  if (index >= storyDataRaiden.length - 1) {
    endStoryRaiden();
  } else {
    const choicesContainer = document.getElementById("choices");

    const currentQuestion = storyDataRaiden[index];

    if (typedInstance) {
      typedInstance.destroy();
    }

    const options = {
      strings: [currentQuestion.question],
      typeSpeed: 2,
      showCursor: false,
    };

    typedInstance = new Typed("#dialog", options);
    console.log(typedInstance);

    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerHTML = `
                  <div class="choices-container animate__fadeIn">
                      <img src="assets/img/msg.png" alt"msg" /> 
                      <p>${choice.text}</p>
                  </div>
              `;
      button.addEventListener("click", () => {
        displayQuestionRaiden(choice.nextQuestion);
      });
      choicesContainer.appendChild(button);
    });
  }
}

function endStoryNeuvillette() {
  const questionContainer = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");

  document.body.style.backgroundImage = "url('assets/img/end.gif')";

  if (typedInstance) {
    typedInstance.destroy();
  }

  choicesContainer.innerHTML = "";
  questionContainer.textContent =
    storyDataNeuvillette[storyDataNeuvillette.length - 1].question;

  const button = document.createElement("button");
  button.innerHTML = `
                <div class="choices-container animate__fadeIn">
                    <img src="assets/img/back.png" alt"msg" /> 
                    <p>Recommencer</p>
                </div>
            `;
  button.addEventListener("click", () => {
    window.location.reload();
  });

  choicesContainer.append(button);
}
function endStoryRaiden() {
  const questionContainer = document.getElementById("question");
  const choicesContainer = document.getElementById("choices");

  document.body.style.backgroundImage = "url('assets/img/raidenUlti.gif')";

  if (typedInstance) {
    typedInstance.destroy();
  }

  choicesContainer.innerHTML = "";
  questionContainer.textContent =
    storyDataRaiden[storyDataRaiden.length - 1].question;

  const button = document.createElement("button");
  button.innerHTML = `
                  <div class="choices-container animate__fadeIn">
                      <img src="assets/img/back.png" alt"msg" /> 
                      <p>Recommencer</p>
                  </div>
              `;
  button.addEventListener("click", () => {
    window.location.reload();
  });

  choicesContainer.append(button);
}

const sound = new Howl({
  src: ["assets/sounds/1.mp3", "assets/sounds/2.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function () {
    console.log("Finished!");
  },
});
