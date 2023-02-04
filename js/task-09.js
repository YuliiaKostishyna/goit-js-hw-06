function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonBgc = document.querySelector(".change-color");
const output = document.querySelector(".color");

buttonBgc.addEventListener("click", () => {
  const colorBgc = getRandomHexColor();
  document.body.style.backgroundColor = colorBgc;
  output.textContent = colorBgc;
} );
