// console.log("Leet code problems");

// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // we have 43 + 15 = 58
// const nums = [2, 7, 11, 15, 115, 43, 332, 500, 500];
// const target = 1000;
// // output should be [3,5]
// function sumIndices(input) {
//   let indices = [];
//   //   we have to loop two so that we can compare first and second
//   //   console.log(input.length);
//   //   console.log(target);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (input[i] + input[j] == target) {
//         console.log(i, j);
//         indices = [i, j];
//         return [i, j];
//       }
//       if (i == nums.length - 2 && j == i + 1 && input[i] + input[j] != target)
//         return "no matches";
//     }
//     //   but how to resolve if it do not found any thing to return
//   }
// }
// // why undefined because it do not found anything to return so while we console result it get undefined to get rid of this we have to return something when it do not found the indices
// const result = sumIndices(nums);
// console.log(result);

/**

 */
const input = [1, 4, 5, 6, 7];
const target = 8;
var reverse = function (input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] == target) {
        indices = [i, j];
        return [i, j];
      }
      if (i == input.length - 2 && j == i + 1 && input[i] + input[j] != target)
        return "no matches";
    }
  }
};
console.log(reverse(input));
