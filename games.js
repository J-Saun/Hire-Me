// giphy API key
let giphyKey = "OE9YCDjFsnC6YihFrMWBl6HOm8LJlVXn";

let totalDice = 4;
let diceSides = 6;

let dice = [];

// the function used on each individual die
function roll(diceSides) {
  let result = Math.floor(Math.random() * diceSides) + 1;
  return result;
}
// pass in the number of dice and how many sides each one has
function executeRoll(totalDice, diceSides) {
  for (let i = 0; i < totalDice; i++) {
    val = roll(diceSides);
    dice.push(val);
  }
}
// create new elements for each die on the board

/* resulting structure of the element 
<div class="dice">
<i class=`fa-solid fa-dice-${dieClass}`></i>
</div>; 
*/
function createDie(dieClass) {
  const newDie = document.createElement("div");
  newDie.classList = "dice";
  const icon = document.createElement("i");

  // change class name to reflect the roll
  icon.classList = `fa-solid fa-dice-${dieClass}`;

  newDie.appendChild(icon);

  const gameBoard = document.querySelector(".gameBoard");
  gameBoard.appendChild(newDie);
}

function updateDOM(dice) {
  // loop through the dice arr
  for (let i = 0; i < dice.length; i++) {
    let value = dice[i];

    // convert to a string so that the template literal will change the dice icons class
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
// clear board elements for next roll
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// populate board on load
executeTurn();

// Score keeper
function score(dice) {
  let total = 0;

  for (let i = 0; i < dice.length; i++) {
    total += dice[i];
  }
  // test
  console.log(dice, "total score", total);
  // reset dice to 0
  dice.length = 0;

  return total;
}

function executeTurn() {
  const gameBoard = document.querySelector(".gameBoard");

  removeAllChildNodes(gameBoard);
  executeRoll(totalDice, diceSides);
  updateDOM(dice);
  score(dice);
}
let rollBtn1 = document.querySelector("#rollBtn1");
rollBtn1.addEventListener("click", executeTurn);
let rollBtn2 = document.querySelector("#rollBtn2");
rollBtn2.addEventListener("click", executeTurn);

// Players name editor

// BUG: ***EMPTY STRING FIX***
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}

// Win Tracker
