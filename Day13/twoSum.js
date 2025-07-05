const l1 = [2, 4, 3, 9];
const l2 = [5, 6, 4, 0];
function addTwo(input1, input2) {
  let remainder = 0;
  let output = [];
  // looping
  for (let i = 0; i < l1.length; i++) {
    // adding first and second input numbers
    const add = input1[i] + input2[i] + remainder;
    // if number is less than 10 than push it as it is
    if (add < 10) {
      output.push(add);
    }
    // if the number is greater than 9
    else {
      const addArray = add.toString().split("");
      const firstNum = parseInt(addArray[1]);
      output.push(firstNum);
      const secondNum = parseInt(addArray[0]);
      remainder = parseInt(secondNum);
    }
  }
  return output;
}
console.log(addTwo(l1, l2));
