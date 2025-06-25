console.log("Rest Operator");

const a = [1, 2, 3, 4, 5];

function add(...a) {
  console.log(...a);
}
add(a);

function names(a, b, ...cricketers) {
  console.log(...cricketers);
  console.log(a, b);
}

const cricketers = ["Dhoni", "Kholi", "Rohit"];
names("Dipu", "Don", cricketers);
