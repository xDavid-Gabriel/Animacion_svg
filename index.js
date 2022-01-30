const btn = document.getElementById("btn");
const letering = document.querySelectorAll(".letering");
const corazon = document.querySelector(".corazon");

btn.addEventListener("click", () => {
  //   letering.classList.add("letering_1");
  btn.style.animationPlayState = "paused";
  letering.forEach((e) => {
    e.classList.add("letering_1");
  });
  corazon.classList.add("corazon_2");
});
