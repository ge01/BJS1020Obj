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

document.getElementById("OD").innerHTML =  ourDog.name;
document.getElementById("MD").innerHTML = myDog.name;
