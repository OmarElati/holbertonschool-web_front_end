function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
};

function main () {
  let spooky = changeMode (9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode (12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode (12, 'normal', 'lowercase', 'white', 'black');

  let par = document.createElement("p");
  par.innerText = "Welcome Holberton!";
  document.body.appendChild(par);

  let firstButton = document.createElement("button");
  let secondButton = document.createElement("button");
  let thirdButton = document.createElement("button");

  firstButton.innerText = "Spooky";
  secondButton.innerText = "Dark mode";
  thirdButton.innerText = "Scream mode";

  document.body.appendChild(firstButton);
  document.body.appendChild(secondButton);
  document.body.appendChild(thirdButton);

  firstButton.addEventListener("click", function () {spooky();});
  secondButton.addEventListener("click", function () {darkMode();});
  thirdButton.addEventListener("click", function () {screamMode();});
}
main();
