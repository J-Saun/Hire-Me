// Board generator
// Dice
// Players name editor
function changeName(player) {
  let enterName = prompt("Please enter your name.");
  let name = (document.querySelector(`h2.${player}`).textContent = enterName);
}
// Score keeper
// Win Tracker
