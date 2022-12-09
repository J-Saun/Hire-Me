// giphy API key
let giphyKey = "OE9YCDjFsnC6YihFrMWBl6HOm8LJlVXn";

let totalDice = 8;
let diceSides = 6;

let dice = [];

function roll(diceSides) {
  let result = Math.floor(Math.random() * diceSides) + 1;
  return result;
}

function executeRoll(totalDice, diceSides) {
  for (let i = 0; i < totalDice; i++) {
    val = roll(diceSides);
    dice.push(val);
  }
}

function createDie(dieClass) {
  let newDie = document.createElement("div");
  newDie.classList = "dice";
  const icon = document.createElement("i");

  // change class name to reflect the roll
  icon.classList = `fa-solid fa-dice-${dieClass}`;

  newDie.appendChild(icon);

  const gameBoard = document.querySelector(".gameBoard");
  gameBoard.appendChild(newDie);
}

function updateDOM(dice) {
  for (let i = 0; i < dice.length; i++) {
    let value = dice[i];

    //   // Convert to string so that a template literal will change the dice icon
    if (value === 1) value = "one";
    else if (value === 2) value = "two";
    else if (value === 3) value = "three";
    else if (value === 4) value = "four";
    else if (value === 5) value = "five";
    else if (value === 6) value = "six";
    else value = dice[i];

    createDie(value);
  }
}
executeRoll(totalDice, diceSides);
updateDOM(dice);
console.log(dice);
// let die1 = document.querySelector("#die1 i");
// let die2 = document.querySelector("#die2 i");

// dice.length = 5;
// console.log(dice);

// // Dice

// // randomize starting dice position
// die1.classList = roll();
// die2.classList = roll();

// // grab the roll btn
// let rollBtn = document.querySelector("#rollBtn");
// rollBtn.addEventListener("click", executeTurn);

// function roll() {
//   let points = Math.floor(Math.random() * 6) + 1;

//   //   console.log(player.score);
//   // Convert to string so that a template literal will change the dice icon
//   if (points === 1) points = "one";
//   else if (points === 2) points = "two";
//   else if (points === 3) points = "three";
//   else if (points === 4) points = "four";
//   else if (points === 5) points = "five";
//   else points = "six";

//   // change class name to reflect the roll
//   dieClass = `fa-solid fa-dice-${points}`;

//   return dieClass;
// }

// function updateDie() {
//   die1.classList = roll();
//   die2.classList = roll();
// }

// function executeTurn() {
//   updateDie();
// }

// Players name editor

// BUG: ***EMPTY STRING FIX***
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}
// Score keeper
function score(player) {
  console.log("score");
}
score();
// Win Tracker
