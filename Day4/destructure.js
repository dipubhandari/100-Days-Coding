// today i am learing about destructing and spread /rest operator in js

console.log("Destructuring in js");

const arr = [1, 4, 5, 7, 23, 67];
// lets destructe it
const [a, b, , d, e, f] = arr;
// console.log(a);
// console.log(f);
// console.log(d);

// now lets set Object Destructuring

const student = {
  name: "Gukesh",
  age: 19,
  profession: "Chess",
};

// we can assess these value with descrtruing wrt key

const { name, age, profession } = student;

// console.log(name);
// console.log(profession);
// console.log(age);

// what if we destruct with different name than its key

const { first, second, third } = student;
// console.log(first);

// so we have to use only the similar name in the object key
// but if we have to change the key variable we have to do like this
const { name: firstname, age: age2, profession2 } = student;
// console.log(firstname);
// console.log(age2);

// Nested Destruturing
const Employee = {
  Department: "Motors",
  bestEmployeeOfTheYear: {
    EmployeeName: "Sunder pichai",
    level: "CEO",
    company: "Google",
  },
  totalRevenue: "1.4B",
};
// console.log(Employee);

// const { Department } = Employee;
// console.log(Department);
// lets try nested destructuring
const { Department, totalRevenue } = Employee;

const { EmployeeName, level, company } = bestEmployeeOfTheYear;
console.log(company);
// console.log(Department, totalRevenue);
console.log(company);
// console.log(level);
// console.log(EmployeeName);
// console.log(bestEmployeeOfTheYear);
