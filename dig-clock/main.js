function clock() {
  let hour = document.getElementById("hour");
  let h = new Date().getHours();
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h;
  let minutes = document.getElementById("minutes");
  let m = new Date().getMinutes();
  m = m < 10 ? "0" + m : m;
  minutes.innerHTML = m;
  let seconds = document.getElementById("seconds");
  let s = new Date().getSeconds();
  s = s < 10 ? "0" + s : s;
  seconds.innerHTML = s;
}

let interval = setInterval(clock, 1000);
