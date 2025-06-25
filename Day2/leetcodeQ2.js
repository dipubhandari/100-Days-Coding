// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

let l1 = [2, 3, 9];
let l2 = [9, 4, 9];
let remainder = 0;
function Q2(l1, l2) {
  let result = [];
  for (let i = 0; i < l1.length; i++) {
    const add = l1[i] + l2[i] + remainder;
    if (add > 9) {
      const [d1, d2] = add.toString().split("").map(Number);
      i == l1.length - 1 || i == l2.length - 1
        ? result.push(add)
        : result.push(d2);
      remainder = d1;
    } else {
      result.push(add);
      remainder = 0;
    }
  }
  return result;
}
const result = Q2(l1, l2);
console.log(result);
