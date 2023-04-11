// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

//------------------------Correction----------------------

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

//--------------------MA Version-----------------------------

// let anim1 = document.querySelector("span:nth-child(1)");
// let anim2 = document.querySelector("span:nth-child(2)");
// let anim3 = document.querySelector("span:nth-child(3)");

// let sideBar = document.getElementById("side-bar");
// let toggle = true;

// let fondu = document.querySelector(".fondu");

// btn.addEventListener("click", () => {
//   if (toggle) {
//     sideBar.style.left = 0;
//     toggle = false;
//     anim1.style.animation = "animBurgerTop 0.5s forwards";
//     anim2.style.animation = "animBurgerMid 0.5s forwards";
//     anim3.style.animation = "animBurgerBot 0.5s forwards";
//   } else {
//     sideBar.style.left = "-230px";
//     toggle = true;
//     anim1.style.animation = "animBurgerTopBack 0.5s forwards";
//     anim2.style.animation = "animBurgerMidBack 0.5s forwards";
//     anim3.style.animation = "animBurgerBotBack 0.5s forwards";
//   }
// });

//   console.log("Youpi !!");
