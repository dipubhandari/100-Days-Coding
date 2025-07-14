console.log("Removing Duplicate from array");

let head = [1, 1, 2, 3, 3];
const output = [1, 2, 3];

function removeDuplicatee(head) {
  const result = [];
  head.forEach((value, index, array) => {
    if (index == 0) {
      result.push(head[index]);
    } else {
      if (result.includes(head[index])) {
        // console.log("it already exist we cannot add this");
      } else {
        result.push(head[index]);
      }
    }
  });
  console.log("Before removing:", head);
  console.log("After removing:", result);
  return result;
}
removeDuplicatee(head);
