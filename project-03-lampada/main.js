const tunrOn = document.querySelector(".tunrOn");
const tunrOff = document.querySelector(".turnOff");
const img = document.querySelector("img");

img.src = "./img/desligada.jpg";

function isBroken() {
  return img.src.indexOf("quebrada") > -1;
}

tunrOn.addEventListener("click", () => {
  if (!isBroken()) {
    img.src = "./img/ligada.jpg";
  }
});

tunrOff.addEventListener("click", () => {
  if (!isBroken()) {
    img.src = "./img/desligada.jpg";
  }
});

img.addEventListener("dblclick", () => {
  img.src = "./img/quebrada.jpg";
});

img.addEventListener("mouseleave", () => {
  if (!isBroken()) {
    img.src = "./img/desligada.jpg";
  }
});

img.addEventListener("mouseover", () => {
  if (!isBroken()) {
    img.src = "./img/ligada.jpg";
  }
});
