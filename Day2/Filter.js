console.log("MAP filter reduce ");

const numbers = [1, 2, 3, 4];
const multiplyByTwo = numbers.map((item) => item * 2);
console.log(multiplyByTwo);
console.log(numbers);

// Example of the filter method

const data = [
  { name: "Amrita", age: 25 },
  { name: "Shahrukh", age: 28 },
  { name: "Dipendra", age: "17" },
];

const adults = data.filter((item) => {
  return item.age >= 18;
});

console.log(adults);
