const button = document.querySelector("#buttons");
const img = document.querySelector("#img");

const imgs = ["verde.png", "amarelo.png", "vermelho.png"];

button.addEventListener("click", function (event) {
  if (event.target.id === "red") {
    img.src = "./img/vermelho.png";
  } else if (event.target.id === "green") {
    img.src = "./img/verde.png";
  } else if (event.target.id === "yellow") {
    img.src = "./img/amarelo.png";
  } else if (event.target.id === "automatic") {
    let random = Math.round(Math.random() * imgs.length);
    img.src = "./img/" + imgs[random];
  }
});
