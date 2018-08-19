// class for player containing variables, can be updated

class Character {
  constructor(attributes) {
    this.name = attributes.name;
    this.health = attributes.health;
    this.place = attributes.place;
    this.place = attributes.items; // might have to be an array depending on how the game turns out
    this.status = attributes.status; // extending base functionality, may include status ailments
  }
  // placeholder for potential methods
  /* poison () {
    return (this.health - 1);
  } */ // general idea for a poison status ailment, losing health each turn or action. would call this later whenever required.
}

let player = new Character({
  // placeholder
});
