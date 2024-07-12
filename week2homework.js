// In your Homework repo, create a new directory named "Week2" and then within that directory, create a JavaScript file - name it something that indicates it is homework for Week 2
// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
const pizzaPlace = "kailyns pizza";
let numberOfToppings = 2;
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
// Print the variables and their types.
console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(
  `at ${pizzaPlace},there is one pizza that has ${numberOfToppings} toppings.`
);
// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings < 10) {
  console.log("quality, not quantity ");
} else {
  console.log("a whole lot of pizza");
}
