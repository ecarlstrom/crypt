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
  /* poison () {
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

console.log(player.name);
console.log(player.health);
console.log(player.place);
console.log(player.items);

// test for ignore file
