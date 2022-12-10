// giphy API key
let giphyKey = "OE9YCDjFsnC6YihFrMWBl6HOm8LJlVXn";

let totalPlayers = 4;
let totalDice = 8;
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
// let rollBtn1 = document.querySelector("#rollBtn1");
// rollBtn1.addEventListener("click", executeTurn);
// let rollBtn2 = document.querySelector("#rollBtn2");
// rollBtn2.addEventListener("click", executeTurn);

// Add or remove players
/* resulting structure of the element 
        <div class="player">
          <div class="player-name">
            <p class="p2">Player 1</p>
            <i
              onclick="changeName('p2')"
              class="fa-regular fa-pen-to-square"
            ></i>
          </div>
          <div class="player-head"><span class="score-title">Score</span></div>
          <div class="player-body">
            <span class="score-count">0</span>
            <div class="avatar"></div>
            <span class="win-count">0</span>
          </div>
          <div class="player-footer">
            <span class="win-title">Wins </span>
          </div>
        </div>
*/
function createPlayer(playerId) {
  const newPlayer = document.createElement("div");
  newPlayer.classList = "player";
  const playerName = document.createElement("div");
  playerName.classList = "player-name";
  const nameText = document.createElement("p");
  nameText.classList = `p${playerId}`;
  nameText.textContent = "Player " + `${playerId}`;
  const nameEdit = document.createElement("i");
  nameEdit.classList = "fa-regular fa-pen-to-square";

  playerName.appendChild(nameText);
  playerName.appendChild(nameEdit);

  const playerHeader = document.createElement("div");
  playerHeader.classList = "player-head";
  const scoreTitle = document.createElement("span");
  scoreTitle.classList = "score-title";
  scoreTitle.textContent = "Score";

  playerHeader.appendChild(scoreTitle);

  const playerBody = document.createElement("div");
  playerBody.classList = "player-body";
  const scoreCount = document.createElement("span");
  scoreCount.classList = "score-count";
  scoreCount.textContent = "0";
  const avatar = document.createElement("div");
  avatar.classList = "avatar";
  const winCount = document.createElement("span");
  winCount.classList = "win-count";
  winCount.textContent = "0";
  playerBody.appendChild(winCount);
  playerBody.appendChild(avatar);
  playerBody.appendChild(scoreCount);

  const playerFooter = document.createElement("div");
  playerFooter.classList = "player-footer";
  const winTitle = document.createElement("span");
  winTitle.classList = "win-title";
  winTitle.textContent = "Wins";
  playerFooter.appendChild(winTitle);

  // **** ADD EVENT LISTENER TO NAME EDIT ICON ****

  newPlayer.appendChild(playerName);
  newPlayer.appendChild(playerHeader);
  newPlayer.appendChild(playerBody);
  newPlayer.appendChild(playerFooter);

  const leftSide = document.querySelector("aside#leftSide");
  const rightSide = document.querySelector("aside#rightSide");

  if (playerId % 2 === 0) rightSide.appendChild(newPlayer);
  else leftSide.appendChild(newPlayer);
}

function updatePlayers(players) {
  for (let i = 0; i < players; i++) {
    let id = i + 1;
    createPlayer(id);
    console.log(i);
  }
}

updatePlayers(totalPlayers);

// Players name editor

// BUG: ***EMPTY STRING FIX***
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}

// Win Tracker
