console.log("Learning about the call back function");

function greet(name, callback) {
  console.log(`HELLO ${name}`);
  callback();
}
// greet("Dippu", callBack);

function callBack() {
  console.log("How are you?");
}
// output expected
// HELLO ${name}
// "How are you?

function AskMe(name, callback) {
  console.log(`Hello ${name}. I wanna ask you,`);
  callBack();
}
AskMe("Dippu", Question);

function Question() {
  console.log("What is you dream job");
}
