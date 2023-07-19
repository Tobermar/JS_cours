const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

let pseudo, mail, password, confirmPass;
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    // le ! marque l'inverse
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  // const pseudoContainer = document.querySelector(".pseudo-container");
  // const errorDisplay = document.querySelector(".pseudo-container > span");
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    //   pseudoContainer.classList.add("error");
    //   errorDisplay.textContent = "Le psueod doit faire entre 3 et 20 caractères";
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caratères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
  console.log(`le pseudo est ${pseudo}`);
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  console.log(value);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;

      default:
        null;
    }
  });
});
