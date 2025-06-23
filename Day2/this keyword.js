console.log("Day 2 of coding challenges");
console.log("This keyword in js");

("use strict");
function fun() {
  //   console.log(this);
}
fun();

// Inside an Object Method
const Person = {
  name: "Dipendra",
  greet() {
    console.log(this.name);
  },
};
// Person.greet();
function greet() {
  console.log(this.name);
}
const user = { name: "Jane" };

greet.call(user); // "Jane"
greet.apply(user); // "Jane"

const boundGreet = greet.bind(user);
boundGreet(); // "Jane"
