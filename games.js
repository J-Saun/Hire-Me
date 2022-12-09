// giphy API key
let giphyKey = "OE9YCDjFsnC6YihFrMWBl6HOm8LJlVXn";

let die1 = document.querySelector("#die1 i");
let die2 = document.querySelector("#die2 i");
console.log(die1, die2);
// Board generator

// Dice

// randomize starting dice position
die1.classList = roll();
die2.classList = roll();

// grab the roll btn
let rollBtn = document.querySelector("#rollBtn");
rollBtn.addEventListener("click", executeTurn);

function roll() {
  let points = Math.floor(Math.random() * 6) + 1;

  //   console.log(player.score);
  // Convert to string so that a template literal will change the dice icon
  if (points === 1) points = "one";
  else if (points === 2) points = "two";
  else if (points === 3) points = "three";
  else if (points === 4) points = "four";
  else if (points === 5) points = "five";
  else points = "six";

  // change class name to reflect the roll
  dieClass = `fa-solid fa-dice-${points}`;

  return dieClass;
}

function updateDie() {
  die1.classList = roll();
  die2.classList = roll();
}

function executeTurn() {
  updateDie();
}

// Players name editor

// BUG: ***EMPTY STRING FIX***
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}
// Score keeper
function score(player) {
  console.log(die1 + die2);
}
score();
// Win Tracker
