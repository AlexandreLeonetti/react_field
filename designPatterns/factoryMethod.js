/* the factory method design pattern */

/* classes */
class Animal {
    constructor(name){
        this.name=name;
    }

    speak(){
        throw new Error("Subclasses must implement the speak method");
    }
}

class Dog extends Animal {
    speak(){
        return `${this.name} says Whoof`;
    }
}

class Cat extends Animal {
    speak(){
        return `${this.name} says Meow`;
    }
}

/* factory function */
function createAnimal(type, name){
    switch(type){
        case "DOG":
            return new Dog(name);
        case "CAT":
            return new Cat(name);
        default  :
            throw new Error("Invalid animal name");
    }
}


/* create two instances */
const myDog  = createAnimal("DOG", "fifi");
const myCat  = createAnimal("CAT", "Caramel");




/* call the methods of each object */
console.log(myDog.speak());
console.log(myCat.speak());
