var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var gradient = document.querySelector('#gradient');

function gradientChange() {
gradient.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  h3.textContent = gradient.style.background;
}

color1.addEventListener('input', gradientChange);

color2.addEventListener('input', gradientChange)
