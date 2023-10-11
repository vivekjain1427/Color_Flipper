// const colors = ["#ff0000", "#0000ff","#008000","#ffff00","#ffc0cb","#000000","#800080","#808080"];
const colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Brown", "Aqua"];
const ShowColor = document.querySelector(".color");
const Btn = document.querySelector("[GetColor]");

function GenerateColor() {
  const rndcolor = Math.floor(Math.random() * colors.length);
  return colors[rndcolor];
}

Btn.addEventListener("click", function () {
  const randomColor = GenerateColor();
  document.body.style.backgroundColor = randomColor;
  ShowColor.textContent = randomColor.toUpperCase();
  
});
