const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,=)àç_è-('\"è";
const rangeValue = document.getElementById("password-length");
const passwordOutpout = document.getElementById("password-output");

function generatePassword() {
  data = [];
  password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez selectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutpout.value = password;

  //   console.log(password);
}

generateButton.addEventListener("click", generatePassword);
