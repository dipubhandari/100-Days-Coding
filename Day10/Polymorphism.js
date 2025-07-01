console.log("Polymorphism in js");

class Animal {
  speaks() {
    console.log("ANimal Speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("CAT meow");
  }
}

class Dog extends Animal {
  speaks() {
    console.log("Dog barks");
  }
}

let dog1 = new Dog();
dog1.speaks();
