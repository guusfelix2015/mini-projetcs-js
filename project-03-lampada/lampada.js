const tunrOn = document.querySelector(".tunrOn");
const tunrOff = document.querySelector(".turnOff");
const img = document.querySelector("img");

img.src = "./img/desligada.jpg";

const on = tunrOn.addEventListener("click", () => {
  img.src = "./img/ligada.jpg";
});

const off = tunrOff.addEventListener("click", () => {
  img.src = "./img/desligada.jpg";
});

const broke = img.addEventListener("dblclick", () => {
  img.src = "./img/quebrada.jpg";
});

const leave = img.addEventListener("mouseleave", () => {
  img.src = "./img/desligada.jpg";
});

const enter = img.addEventListener("mouseover", () => {
  img.src = "./img/ligada.jpg";
});
