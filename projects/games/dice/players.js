let totalPlayers = 4;

let players = [];

// REMOVE AND REPLACE WITH SINGLE ROLL BUTTON
// ------------------------------------------
// let rollBtn1 = document.querySelector("#rollBtn1");
// rollBtn1.addEventListener("click", executeTurn);
// let rollBtn2 = document.querySelector("#rollBtn2");
// rollBtn2.addEventListener("click", executeTurn);

// Add or remove players
/*  --target result-- 

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
  scoreCount.textContent = "99";
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

    console.log(id);
  }
}
console.log(players);

updatePlayers(totalPlayers);

// Players name editor

// BUG: ***EMPTY STRING FIX***
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}
