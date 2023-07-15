//Math.floor(Math.random() * 256);
// creer 3 variable pour stocker 3 chifre aleatoire
// donner au boddy la couleur rgb
// montrer sur le body la couleur rgb
function getColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor, 1000);
