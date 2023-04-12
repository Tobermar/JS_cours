// SELECTEURS
//document.querySelector("h4").style.background = "yellow";

//const baliseH4 = document.querySelector("h4");
//baliseH4.style.background = "yellow";

//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(response);

// questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  //   questionContainer.classList.add("question-clicked");
  //   questionContainer.classList.remove("question-clicked");
  questionContainer.classList.toggle("question-clicked"); // remove or add selon celui qui est
});
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// #id > .class > baliseHTML
//---------------------------------------------------------------------------------

//Mouse Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = " 2px skyblue solid";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg) ";
});

response.addEventListener("mouseout", () => {
  response.style.transform = "rotate(0deg) ";
});

//------------------------------------------------------------------------

//keyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// const ring = () => {
//   const audio = new Audio();
//   //audio.src = "./Enter.mp3";
//   audio.play();
// };
// const ring = (key) => {
//   const audio = new Audio();   //dans le cas ou on veut joindre une touche a un son
//   audio.src = key + ".mp3";
//   audio.play();
// };

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "skyblue";
  } else {
    keypressContainer.style.background = "black";
  }
  ring();
  // ring(e.key);             //dans me cas on on veut joindre une touche a un son
});

//------------------------------------------------------------------------

//scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //console.log(window.scroll);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else if (window.scrollY > 60) {
    nav.style.top = "-25px";
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------------------------

//Form Event

const inputName = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value; //e(variable donner par moi), e.target.value enregistre se qui a été taper dans "input"
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // pour aue le bouter "valider" ne lance pas d'autre page en gos nnuler le bouton valider pour le moment

  //console.log(cgv.checked);

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo} </h3>
      <h4>Langue : ${language} </h4>
    `; // ("form > div") selectione l'enfant "div" de la balise "form"
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------

//Load Event

window.addEventListener("load", () => {
  console.log("Document chargé!");
});

//-----------------------------------------------
//ForEach
// const boxes = document.getElementsByClassName("box"); Cette solution provoque des bug, il vaut mieux utiliser  querySelectorAll(ne pas oublier le point pour appeler la classe)
const boxes = document.querySelectorAll(".box");
console.log(boxes);

// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     e.target.style.transform = "scale(0.7)";
//   });
// });

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//-----------------------------------------------

//addEvenetListener Vs Onclick
// la difference entre les deux est que onClick écrase le onclick précédent a l'inverse du even listner

//Bubling => false ( mode de base ça lis dans l'ordre de haut en bas)

document.body.addEventListener("click", () => {
  console.log("1");
});

//Usecapture => true (passe devant tout les autres évènements du même type dans ce cas ("click"))
document.body.addEventListener(
  "click",
  () => {
    console.log("2");
  },
  true
);
//-----------------------------------------------

//Stop propagation => passe devant les autres event listener du même type ("click") sauf le useCapture

// questionContainer.addEventListener("click", (e) => {
//   alert("test !");
//   e.stopPropagation();
// });

//removeEventListner

//-----------------------------------------------

//BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

//window.open("http://www.google.com", "cours js", "height=600", "width= 800");
//window.close()

//Evènements addosés a window
//alert("hello")

//confirm
// btn2.addEventListener("click", (e) => {
//   e.stopPropagation();
//   confirm("vous etes sur?");
// });

// //prompt
// btn1.addEventListener("click", () => {
//   let answer = prompt("Entrez votre nom !");
//   questionContainer.innerHTML += `<h3> Bravo  ${answer} !</h3>`;
// });

// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px"; //logique a exécuter
// }, 2000 /*"temps en millisecondes avant de déclancher"*/);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class="box">
//     <h2>Nouvelle Boite !</h2>
//   </div>
//   `;
// }, 1000);

// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// });

//-----------------------------------------------------

//setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
