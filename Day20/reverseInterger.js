// Example 1:

// Input: x = 123
// Output: 321

// console.log("I will solve this tommoworw");
let input = 234234;

function reverse(a) {
  let result = "";
  let resultArr = [];
  const newData = a.toString();
  const arr = newData.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i]);
  }
  resultArr.forEach((value, index) => {
    if (index == 0) {
      result = value;
    } else {
      result += value;
    }
  });
  const realResult = Number(result);
  return realResult;
}
console.log(reverse(input));
