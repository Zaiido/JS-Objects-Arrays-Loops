/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("\n-------------Exercise 1-------------\n");

let arrayOfFiveNumbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n-------------Exercise 2-------------\n");

let myDataObject = {
  name: "Zaide",
  surname: "Kurti",
  email: "zaidekurti20@gmail.com",
  age: 23,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n-------------Exercise 3-------------\n");

myDataObject.drivingLicense = false;
console.log(myDataObject);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n-------------Exercise 4-------------\n");

delete myDataObject.age;
console.log(myDataObject);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n-------------Exercise 5-------------\n");

let anotherObject = {
  name: "John",
  surname: "Doe",
  email: "johndoe@gmail.com",
};

if (myDataObject.email !== anotherObject.email) {
  console.log("The objects have different email addresses.");
} else {
  console.log("The objects have the same email address.");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n-------------Exercise 6-------------\n");

let totalShoppingCart = 10;
if (totalShoppingCart > 50) {
  console.log("You qualify for free shipping. Total cost:", totalShoppingCart);
} else {
  console.log(
    "Your shipping costs were added to the total. Total cost:",
    totalShoppingCart + 10
  );
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n-------------Exercise 7-------------\n");

totalShoppingCart -= totalShoppingCart * 0.2;
if (totalShoppingCart > 50) {
  console.log("You qualify for free shipping. Total cost:", totalShoppingCart);
} else {
  console.log(
    "Your shipping costs were added to the total. Total cost:",
    totalShoppingCart + 10
  );
}
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n-------------Exercise 8-------------\n");

let carObject = {
  brand: "Mercedes",
  model: "G Class",
  licensePlate: "BZK219",
};
console.log(carObject);

let firstCarClone = Object.assign({}, carObject);
firstCarClone.licensePlate = "BOM218";
console.log(firstCarClone);

let secondCarClone = Object.assign({}, carObject);
secondCarClone.licensePlate = "BSM217";
console.log(secondCarClone);

let thirdCarClone = Object.assign({}, carObject);
thirdCarClone.licensePlate = "BEM216";
console.log(thirdCarClone);

let fourthCarClone = Object.assign({}, carObject);
fourthCarClone.licensePlate = "BEK215";
console.log(fourthCarClone);

let fifthCarClone = Object.assign({}, carObject);
fifthCarClone.licensePlate = "BBB214";
console.log(fifthCarClone);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n-------------Exercise 9-------------\n");

let carsForRent = [
  carObject,
  firstCarClone,
  secondCarClone,
  thirdCarClone,
  fourthCarClone,
  fifthCarClone,
];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n-------------Exercise 10-------------\n");

carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n-------------Exercise 11-------------\n");

console.log("The type of the original car:", typeof carObject);
console.log("The type of the license plate:", typeof carObject.licensePlate);
console.log("The type of the brand:", typeof carObject.brand);
/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n-------------Exercise 12-------------\n");

let carsForSale = [];
carsForSale = [
  {
    brand: "Audi",
    model: "Q7",
    licensePlate: "BAA019",
  },
  {
    brand: "Nissan",
    model: "Qashqai",
    licensePlate: "BCC012",
  },
  {
    brand: "Renault",
    model: "Clio",
    licensePlate: "BSS001",
  },
];

let totalCars = carsForRent.length + carsForSale.length;
console.log("Total cars for rent and sale:", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n-------------Exercise 13-------------\n");

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
