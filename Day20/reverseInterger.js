// Example 1:

// Input: x = 123
// Output: 321

// console.log("I will solve this tommoworw");
let input = 234234;

function reverse(data) {
  //   lets split every digits and put them as an array
  //   first convert it to the string
  let result = undefined;
  let resultArr = [];
  const newData = data.toString();
  //   now lets reverse it do not make use of prebuilt function like reverse()
  const arr = newData.split("");
  //   real reverse heree
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i]);
  }
  resultArr.map((value, index) => {
    if (index == 0) {
      result = value;
    } else {
      result += value;
    }
  });
  const realResult = Number(result);
  console.log(realResult);
  return realResult;
}
reverse(input);
