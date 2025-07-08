const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".span-color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let count = 0; count < 6; count++) {
    // 6 por ser o max de char no hexcode
    hexColor += hexa[getRandomHex()];
  }
  console.log(hexColor);
  const mainColor = (document.body.style.backgroundColor = hexColor);
  color.textContent = hexColor;
});

function getRandomHex() {
  return Math.floor(Math.random() * hexa.length);
}
