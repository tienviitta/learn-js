function dice(index) {
  const img = document.getElementById("img");
  img.setAttribute("src", `assets/${index}.png`);
}

function shuffle() {
  const img = document.getElementById("img");
  let random = Math.floor(Math.random() * 6) + 1;
  img.setAttribute("src", `assets/${random}.png`);
}

function roll() {
  for (let index = 1; index < 7; index++) {
    setTimeout(dice, index * 50, index);
  }
  setTimeout(shuffle, 350);
}
