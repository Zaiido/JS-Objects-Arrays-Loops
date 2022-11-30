// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("\n-------------Exercise 1-------------\n");

let modelArray = [1, 3, 5];

console.log("Reversed array:", modelArray.reverse());

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n-------------Exercise 2-------------\n");

let maxValue = modelArray[0];
for (let i = 0; i < modelArray.length; i++) {
  if (maxValue < modelArray[i]) {
    maxValue = modelArray[i];
  }
}
console.log("The maximum value is:", maxValue);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("\n-------------Exercise 3-------------\n");

let minValue = modelArray[0];
for (let i = 0; i < modelArray.length; i++) {
  if (minValue > modelArray[i]) {
    minValue = modelArray[i];
  }
}
console.log("The minimum value is:", minValue);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("\n-------------Exercise 4-------------\n");

modelArray = [4, 8, 1];
for (let i = 0; i < modelArray.length; i++) {
  if (modelArray[i] % 2 === 0) {
    console.log(modelArray[i]);
  }
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("\n-------------Exercise 5-------------\n");

modelArray = [4, 8, 6, 5, 1];
for (let i = 0; i < modelArray.length; i++) {
  if (modelArray[i] % 2 === 0) {
    modelArray.splice(i, 1);
    i -= 1;
  }
}
console.log("New array with odd values only:", modelArray);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("\n-------------Exercise 6-------------\n");

let string = "zaide";
let consonantsArray = [];

for (let i = 0; i < string.length; i++) {
  if (
    string[i] !== "a" &&
    string[i] !== "e" &&
    string[i] !== "i" &&
    string[i] !== "o" &&
    string[i] !== "u"
  ) {
    consonantsArray.push(string[i]);
  }
}
console.log("New string without vowels:", consonantsArray.join(""));

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log("\n-------------Exercise 7-------------\n");

modelArray = [1, 2, 3];

for (let i = 0; i < modelArray.length; i++) {
  modelArray[i] += 1;
}
console.log("Array with values increased by 1:", modelArray);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("\n-------------Exercise 8-------------\n");

let stringArray = ["strive", "is", "great"];

for (let i = 0; i < stringArray.length; i++) {
  stringArray[i] = stringArray[i].length;
}
console.log("Array with lengths:", stringArray);
