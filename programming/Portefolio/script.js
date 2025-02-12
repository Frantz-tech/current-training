const projectData = [
  {
    text: " project 1",
  },
  {},
  {},
  {},
  {},
  {},
  {},
];

const map = document.querySelector("#map");

map.addEventListener("click", () => {
  window.open(
    "https://www.google.fr/maps/place/19+Rue+du+Lion+d'Or,+59140+Dunkerque/@51.0319043,2.3704021,17z/data=!3m1!4b1!4m6!3m5!1s0x47dc8c7d10b5266d:0x203eb40f99b43ed7!8m2!3d51.031901!4d2.372977!16s%2Fg%2F11c2bm8dl0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
});
const p = document.querySelector("#typedStyle");

const typed = new Typed(p, {
  strings: ["Bonjour !", "Je m'appelle Frantz", "Bienvenue sur mon site"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  cursorChar: "_",
  onStringTyped: function (arrayPos, self) {
    if (arrayPos === self.strings.length - 1) {
      setTimeout(() => {
        self.cursor.remove();
      }, 500);
    }
  },
});

const btn = document.getElementById("btnGoUp");
let isVisible = false;
window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight * 3) {
    if (!isVisible) {
      isVisible = true;
      btn.style.animation = "fadeIn 1s";
      btn.style.visibility = "visible";
      console.log("scroll");
    }
  } else {
    if (isVisible) {
      isVisible = false;
      btn.style.animation = "fadeOut 1s";
      setTimeout(() => {
        btn.style.visibility = "hidden";
      }, 1000);
      console.log("elsescroll ");
    }
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const workbox = document.querySelector(".workbox");
const projets = document.createElement("div");
projets.classList.add("projetsContainer");
workbox.appendChild(projets);

projectData.forEach((project, index) => {
  let realIndex = index + 1;
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectC");
  const projectContainer2 = document.createElement("div");
  projectContainer2.classList.add("projectC2");
  const fixHover = document.createElement("div");
  fixHover.classList.add("fixHover");
  const projectContent = document.createElement("div");
  projectContent.classList.add(
    "projetContainer",
    `projet${realIndex}Container`
  );

  const webDevTitle = document.createElement("p");
  projectContainer2.appendChild(webDevTitle);
  webDevTitle.textContent = " projectData.text";

  const webDev = document.createElement("p");
  projectContainer2.appendChild(webDev);
  webDev.textContent = "Web Developpement";

  projectContainer.appendChild(projectContent);
  projectContainer.appendChild(fixHover);
  fixHover.appendChild(projectContent);
  projets.appendChild(projectContainer);
  projectContainer.appendChild(projectContainer2);
});
