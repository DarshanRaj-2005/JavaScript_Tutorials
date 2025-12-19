/*Inheritance is using one class data or objects into other class*/

class Animal {

    constructor(name){
        this.name = name;
    }

    speak(){
        comsole.log('this.name');
    }
}
/*Dog class using animal class objects.*/
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(this.name + " barks");
  }
}

let dog1 = new Dog("Tommy", "Labrador");
dog1.speak();