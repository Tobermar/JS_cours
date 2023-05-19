//Rappel de types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type undefined

//Tableaux
let array = ["Bordeaux", "Toulouse ", "Nantes"];
// console.log(array[1][3]);

let array2 = ["Bordeau", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adress = "162 Bd de Smet";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Css", "HTML", "Sass"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "MySql", "Back.End"],
    admin: true,
  },
];

// console.log(data[2].technos[1]);

//-----------------------------------
//Les structures de controles
//-----------------------------------

if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //la valeur si c'est faux
}

// if (valeur à tester)
//   valeur si vrai
// else
//   valeur si faux

// valeur à tester ? si vrai : si faux (condition tertiaire)

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("la valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans </li>`;
}

//On déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(data[i].pseudo);
  // document.body.innerHTML += `<li>${data[i].pseudo} - ${data[i].age} ans - techno préférer : ${data[i].technos[0]} </li>`;
}

//Switch

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  //Else if

  // if (e.target.id === "javascript") {
  //   document.body.style.background = "yellow";
  // } else if (e.target.id === "php") {
  //   document.body.style.background = "darkblue";
  // } else if (e.target.id === "python") {
  //   document.body.style.background = "green";
  // }

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "blue";
      break;
    case "python":
      document.body.style.background = "green";
      break;
    default:
      null;
  }
});

//---------------------------
//Méthode String (une méthode est une fonction qui est déjà codé dans le code source)
//---------------------------

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof string2);
// console.log(typeof "42");

// console.log(eval(parseInt("1") + 2));
//parseInt change la valeur de string a number

// console.log(isNaN(string));
// isNaN (in Not a Number) me répond par true ou false si c'est un nombre ou pas (false si c'est un nombre (a cause de la question négative))

// console.log(string2.length);
// console.log(string2[string2.length - 1]); // pour connaitre le dernier caractère de string2
// -1 car l'index commence à "0"

// console.log(string2.indexOf("langage"));
// le chiffre est l'index du premier qu'il trouve, si il est négatif c'est pcq il n'a pas

// let newString = string2.slice(20);
// let newString = string2.slice(5 , 17);
// console.log(newString);
////permet de couper le mot a partir du 20 ème caractère ou alors entre 2 valeurs

// console.log(string2.split(" "));
//Coupe a partir de la valveur donné marche avec espace pour par exemple séparer tous le mots

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//---------------------------
//Méthode pour les numbers
//---------------------------

let number2 = 42.12345;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt("45"));
// console.log(parseInt(numberString)); // sort le premier chiffre rencontré
// console.log(parseFloat(numberString));

//Math
// console.log(Math.PI);
// console.log(Math.round(4.5));//arrondi
// console.log(Math.floor(4.5));//arrondi au plus bas
// console.log(Math.ceil(4.5));//arrondu au plus haut
// console.log(Math.pow(2, 7));//2 puissance 7
// console.log(Math.sqrt(16));//racine carré

// console.log(Math.random() * 50); // pour avoir un chiffre |e| 0 et 50
// console.log(Math.floor(Math.random() * 50));

//---------------------------
//Méthodes Arrays
//---------------------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" / "));

// console.log(newArray.slice(1));
// console.log(newArray.slice(2, 3));

// console.log(array3.indexOf('Python'));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language === "Php"));

// let shift = array3.shift() // retirer le premier élément

// let shift = array3.pop() // retirer le dernier élément

// const restArray = array3.splice(1, 1, "C++"); // Permet de rémplacer un element du tableau la premier "1" signifie : à l'emlacement  1. Le deuxeiéme "1" : tu retire un élément et la troisième valeur signifie par quoi on le remplace.
// console.log(restArray);
// console.log(array3);

// const restArray2 = array3.splice(0, 3, ...array4);
// console.log(restArray2);

//---------------------------
//IMPORTANT
//---------------------------

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
//consol.log(arrayNumber)

//FILTER, SORT , MAP

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML += arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

//---------------------------
//Méthode Objects
//---------------------------

// document.body.innerHTML = data
//   // .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
// <div class = "user-card">
//   <h2>${user.pseudo}</h2>
//   <p>Age : ${user.age} ans </p>
//   <p> Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
//   <p>Techno favorite : ${user.technos[0]}</p>
//   <p> Autres Technos : ${user.technos[1]}, ${user.technos[2]} </p>
// </div>
//  `
//   )
//   .join("");

//-------------
//Les dates
//-------------

//Dates classiques
let date = new Date();

//TimeStamp
let timeStamp = Date.parse(date);

//IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long", //ou 'short' ou 'numeric'
    day: "numeric",
    // hour:'numeric'
    // minute:'numeric'
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timeStamp));
// console.log(dateParser(iso));

//------------------
//Destructuring
//------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;

console.log(moreData.destVar);
console.log(destVar);

let array5 = [70, 60, 90];
let [x, y, z] = array5;
console.log(x);
console.log(y);
console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

console.log(dateDestructuring(iso));

//-------------
//Les Datasets
//-------------
