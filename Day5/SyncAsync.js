console.log("Synchronous vs asynchronous");

// Synchronous

// console.log("First");
// console.log("Second");
// console.log("Third");

// Asynchronouss

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("third");
