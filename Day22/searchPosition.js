console.log("Search array position");
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

(nums = [1, 3, 5, 6]), (target = 6);

function searchPosition(num, target) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] == target) {
      console.log(i);
      //   return i;
    }
  }
}

searchPosition(nums, target);
