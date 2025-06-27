console.log("Promises in Js");

const task = false;
let promise = new Promise((resolve, reject) => {
  if (task) {
    resolve("The task is successful...");
  } else {
    reject("The task is failure...");
  }
});

promise
  .then((msg) => {
    // console.log(msg);-
  })
  .catch((msg) => {
    // console.log(msg);
  });

//   Promise.all()
Promise.all([
  Promise.resolve("Task 1 is Complete"),
  Promise.resolve("Task 2 is Done"),
  Promise.resolve("Task 3 is Done"),
  Promise.reject("Task 4 is failed"),
  Promise.resolve("Task 5 is Completed"),
])
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });
//   Note: In promise.all() If any of the promise got rejected it return it but if all of the promise were fullfiled it return all as an array

// Promise.allSettled()
Promise.allSettled([
  Promise.resolve("Task 1 is Complete"),
  Promise.resolve("Task 2 is Done"),
  Promise.resolve("Task 3 is Done"),
  Promise.reject("Task 4 is failed"),
  Promise.resolve("Task 5 is Completed"),
])
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });

//   Note: It waits to complete all the promises any return all the result as an array

// Promise.allSettled()
Promise.race([
  Promise.reject("Task 0 is failed"),
  Promise.resolve("Task 1 is Completed"),
  Promise.resolve("Task 2 is Done"),
  Promise.resolve("Task 3 is Done"),
  Promise.reject("Task 4 is failed"),
  Promise.resolve("Task 5 is Completed"),
])
  .then((result) => {
    // console.log(result);
  })
  .catch((error) => {
    // console.log(error);
  });

//   Note: in this either it got reject or resolve it will return the first result

// Promise.allSettled()
Promise.any([
  Promise.reject("Task 0 is failed"),
  Promise.reject("Task 1 is Completed"),
  Promise.reject("Task 2 is Done"),
  Promise.resolve("Task 3 is Done"),
  Promise.reject("Task 4 is failed"),
  Promise.resolve("Task 5 is Completed"),
  Promise.reject("Task 6 is failed"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   Note: Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
