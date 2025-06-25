// Write a function findMissingNumber(arr) that takes an array of consecutive integers (in random order) with one number missing, and returns the missing number

const arr = [3, 7, 2, 8, 6, 4, 5];

function findMissingNumber(arr) {
  let track;
  //   looping the every and check if exist or not

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        9;
      }
    }
  }
}
const result = findMissingNumber(arr);
console.log(result);
