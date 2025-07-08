const colors = ["#6a5acd", "#3cb371", "#48c2be", "#5d0ca9", "#26e2a9"];

const btn = document.getElementById("btn");
const color = document.querySelector(".span-color");

btn.addEventListener("click", function () {
  console.log("Você clica, eu mudo!");
  const randomColorNumber = getRandomColor();

  document.body.style.backgroundColor = colors[randomColorNumber];
  document.querySelectorAll("span")[0].textContent = colors[randomColorNumber];
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
