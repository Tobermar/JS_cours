// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let playOnce = true;

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue = (window.scrollY + innerHeight) / document.body.offsetHeight;

  console.log(scrollValue);

  if (scrollValue > 0.5 && scrollValue < 0.86) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = 1;
  } else {
    imgImprovise.style.transform = "translateX(-250px)";
    imgImprovise.style.opacity = 0;
  }

  if (scrollValue > 0.87 && playOnce) {
    popup.style.transform = "none";
    popup.style.opacity = 1;
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(450px)";

  if ((popup.style.transform = "translateX(450px)")) {
    popup.style.display = "none";
  }
});
