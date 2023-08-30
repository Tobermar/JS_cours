// let choice = document.getElementById("choice");

// let countdownDisplay = choice.value;

// let totalSeconds = choice.value * 60;

form.addEventListener("submit", (e) => {
  let totalSeconds = choice.value * 60;
  e.preventDefault();

  let countdown = () => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent = `${minutes} : ${sec}`;

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      countdownDisplay.textContent = "c'est finit";
    }
  };
  setInterval(countdown, 1000);
  form.reset();
  // Ou alors choice.value="";
});

//Ma version fait tout seul

// let totalSeconds = choice.value * 60;
// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60;
// form.addEventListener("submit", (e) => {
//   let totalSeconds = choice.value * 60;
//   e.preventDefault();
//  let countdown = () => {
//     if (minutes > 0 && seconds === 0) {
//       minutes--;
//     }
//     if (seconds > 0) {
//       seconds--;
//     } else {
//       seconds = 59;
//     }
//     countdownDisplay.textContent = `${minutes} : ${seconds}`;
//     console.log(minutes);
//   };
// });
