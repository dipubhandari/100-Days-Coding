console.log("Spread Operator");

const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
console.log(...arr, ...arr2);

const obj = { first: "Dippu", second: "Don" };
const obj2 = { location: "London", profession: "Software Engineer" };
const mergedObj = { ...obj, ...obj2 };
// console.log(mergedObj);
console.log({ ...obj, ...obj2 });

function sum(a, c, d) {
  return a + c + d;
}
const newArr = [1, 2, 3];
const result = sum(...newArr);
console.log(result);

// copying the arry in to indiviual argument

// copying array or obj
const original = [1, 3, 4];
const copy = [...original, 5, 6];
console.log(copy);
console.log(original);
