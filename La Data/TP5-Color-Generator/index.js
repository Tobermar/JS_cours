// Créer 3 Variables pour stocker 3 chiffres aléatoires

// Donner au body une couleur de fond en rgb ()

// Montrer sur le body la couleur rgb()

// document.body.style.background = ;

let span = document.querySelector("span");
let r = "";
let g = "";
let b = "";

let colorChange = () => {
  {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    bgColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = bgColor;
    document.body.innerHTML = `<h2>${bgColor}</h2>`;
  }
};

// colorChange();
setInterval(colorChange, 1000);
