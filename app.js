document.addEventListener("click", csinaljlovakat);
let scorevar = 0;
function csinaljlovakat(event) {
  let covid = document.createElement("img");
  let random = Math.floor(Math.random() * 100) + 20;
  covid.src = "covid.png";
  document.body.appendChild(covid);
  covid.style.position = "absolute";
  covid.style.width = random + "px";
  covid.style.top = event.clientY - random / 2 + "px";
  covid.style.left = event.clientX - random / 2 + "px";
  viruses.push(covid);
  scorevar = parseInt(scorevar) + 1;
  scorecounter.innerHTML = scorevar;
}

function mindentmozgat() {
  for (var i = 0; i < viruses.length; i++) {
    viruses[i].style.left = parseInt(viruses[i].style.left) + 3 + "px";
  }
}

setInterval(mindentmozgat, 10);
var viruses = [];
