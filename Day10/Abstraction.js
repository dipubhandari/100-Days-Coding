console.log("Abstraction in js");

class ImplementAbstraction {
  // methods to set value of internal methods
  set(x, y) {
    this.a = x;
    this.b = y;
  }
  display() {
    console.log("The value of a = ", this.a);
    console.log("The value of b = ", this.b);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 88);
obj.display();
