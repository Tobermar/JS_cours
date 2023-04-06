// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const navBar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    navBar.style.top = "-60px";
  } else {
    navBar.style.top = 0;
  }
  lastScroll = window.scrollY;
});
