const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const anotherPerson = {
  firstName: 'Jane',
  lastName: 'Doe'
};

// Bind the fullName function from the person object to the anotherPerson object
let fullName = person.fullName.apply(anotherPerson);


console.log(fullName); // Output: Jane Doe

let unbound = person.fullName;
console.log("Unbound : ",unbound());

/* ubound.apply(object)  is invoked immediately */
let applied = unbound.apply(person);
console.log(` unbound.apply(object) : ${applied}`);



/* ubound.bind(object) */
let bound = unbound.bind(person);
console.log("bound : ",bound());




/* unbound.call(object) is invoked immediately*/

let xcall = unbound.call(person);
console.log("call(person) : ",xcall);


let xcall2  = unbound.call(anotherPerson);

console.log(xcall2);


