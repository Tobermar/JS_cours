// let interval = setInterval(() => {
//   document.body.innerHTML += `
//   <div class="box"></div>
//   `;
// }, 1000);

let hit = document.querySelector(".hit");
// let miss = document.querySelector(".miss");
// let exploded = document.querySelector(".exploded");
// let body = document.querySelector("body");

let hitScore = 0;
// let missScore = 0;
// let explosedScore = 0;

let bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  let size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 50 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  setTimeout(() => {
    bubble.remove();
  }, 8000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    hitScore++;
    hit.textContent = hitScore;
    // console.log(hitScore);
  });
};
// body.addEventListener("click", () => {
//   missScore++;
//   miss.innerHTML = "Miss : " + missScore;
// });
// console.log(score[]);

setInterval(bubbleMaker, 300);
