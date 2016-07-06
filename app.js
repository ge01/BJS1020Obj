/*********************************************
*           Build JavaScript Objects         *
*********************************************/
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
// Only change code below this line.
var myDog = {
  name: "Fermi",
  legs: 4,
  tails: 1,
  friends: ["Cooper", "Rocky", "Bella", "Lola"]
};
// Output to HTML
document.getElementById("OD").innerHTML =  ourDog.name;
document.getElementById("MD").innerHTML = myDog.name;

/**********************************************
* Accessing Objects Properties with Variables *
**********************************************/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line;
var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
document.getElementById("PN").innerHTML =  playerNumber;
document.getElementById("TO").innerHTML = player;
