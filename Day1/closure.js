// // console.log("DAY 1 OF CODING CHALLENGE");

// // function Outer() {
// //   var person = "Ram Charan";
// //   // console.log(person);

// //   function Inner() {
// //     console.log(person);
// //     // console.log("Its an inner function");
// //   }
// //   Inner();
// //   // console.log("Its an inner function");
// //   return Inner;
// //   // console.log(person);
// // }
// // // let person = "Ram Charan";
// // // console.log(person);
// // Outer();
// // // console.log(Outer());

// function createCounter() {
//   let count = 0; // Private variable

//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },
//     decrement() {
//       count--;
//       console.log(count);
//     },
//     getValue() {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// console.log(counter.getValue()); // 2
// console.log(counter.count);

// (function () {
//   let hidden = "I'm private variable!";
//   console.log(hidden);
// })();

(function Addition(firstNum, secondNum) {
  console.log(firstNum + secondNum);
})(9, 9);
