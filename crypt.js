// class for player containing variables, can be updated

class Character {
  constructor(attributes) {
    this.name = attributes.name;
    this.health = attributes.health;
    this.place = attributes.place;
    this.items = attributes.items; // might have to be an array depending on how the game turns out
    this.status = attributes.status; // extending base functionality, may include status ailments
  }
  // placeholder for potential methods
  /* poison() {
    return (this.health - 1);
  } */ // general idea for a poison status ailment, losing health each turn or action. would call this later whenever required.
}

let player = new Character({
  // placeholder, basic values added
  'name': 'Player',
  'health': '50',
  'place': 'The Dungeon of Doom', // generic names for now
  'items': 'Rusty Key, Sword of Destiny, Piece of cheese' // probably changing this to an array later
  // 'status':
});

// console.log(player.name);
// console.log(player.health);
// console.log(player.place);
// console.log(player.items);

// functions to display player information

function showPlayerName(playerName) {
  console.log(`Player name is ${playerName}`);
}

function showPlayerHealth(playerName, playerHealth) {
  console.log(`${playerName} has ${playerHealth} health`);
}

function showPlayerPlace(playerName, playerPlace) {
  console.log(`${playerName} is in ${playerPlace}`);
}

function showPlayerItems(playerName, playerItems) {
  console.log(`${playerName} possesses ${playerItems}`);
}

// other functions for new attributes will be added

// cumulative function

function showPlayerInfo(playerName, playerHealth, playerPlace, playerItems) {
  showPlayerName(playerName);
  console.log(''); // formatting
  console.log("-------------------------");

  showPlayerHealth(playerName, playerHealth);
  showPlayerPlace(playerName, playerPlace);
  showPlayerItems(playerName, playerItems);

  console.log("-------------------------");
  console.log('');
}

// showPlayerName('Player');
// showPlayerHealth('Player', 50);
// showPlayerPlace('Player', 'somewhere');
// showPlayerItems('Player', 'inventory 1, inventory 2, inventory 3');
// showPlayerInfo('Player', 50, 'somewhere', 'inventory item, 2, 3');

// adding function versions that return rather than log the results

function getPlayerName(playerName) {
  return playerName;
}

function getPlayerHealth(playerName, playerHealth) {
  return (`${playerName} has health ${playerHealth}`);
}

function getPlayerPlace(playerName, playerPlace) {
  return (`${playerName} is in ${playerPlace}`);
}

function getPlayerItems(playerName, playerItems) {
  return (`${playerName} possesses ${playerItems}`);
}

// display formatting function

function borderCreate() {
  return ('=============================');
}

// cumulative return function

function getPlayerInfo(player) {

  let playerInfo = '';

  playerInfo = '\n' + player.name;

  playerInfo += '\n' + borderCreate();
  playerInfo += '\n' + getPlayerHealth(player.name, player.health);
  playerInfo += '\n' + getPlayerPlace(player.name, player.place);
  playerInfo += '\n' + getPlayerItems(player.name, player.items);
  playerInfo += '\n' + borderCreate();

  playerInfo += '\n';

  return playerInfo;
}

// test objects for return functions

let player1 = {
  'name': 'Player 1',
  'place': 'The Dungeon of Doom',
  'health': '50',
  'items': 'one, two, three'
}

let player2 = {
  'name': 'Player 2',
  'place': 'The Old Library',
  'health': '50',
  'items': 'dagger, potion, sack of gold'
}
console.log(getPlayerInfo(player1));
console.log(getPlayerInfo(player2));

//end player display functions
