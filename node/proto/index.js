//https://www.youtube.com/watch?v=01jVgCK-HX4
//https://www.youtube.com/watch?v=mQ4oCgcgHOA
let log = console.log;

let o1 = {}; // new empty obj

log(o1);
log(o1.constructor);
log(o1.__proto__);


function Cat () {
    // cat constructor
}


let kitty = new Cat();

log("tuto 2");
//Protoypal inheritance and the prototypal chain.
//ES6 introduced classes wich is the modern way of building objects.



/* objects literals */
/*
const person = {
    alive : true
}

const musician = {
    plays : true
}

musician.__proto__ = person;

log(musician.plays)
log(musician.alive)
console.dir(musician)
*/
// JS now has getPrototypeOf  and setPrototypeOf  methods instead of using __proto__*/

const person = {
    alive : true
}

const musician = {
    plays : true
}


Object.setPrototypeOf(musician, person);
log(musician.__proto__);
log(musician.alive);
// prototype chain, missing property go up to person.
log(musician.plays);

//Extending the prototype chain => general to specific, => more specific.
const guitarist = {
    strings: 6,
    __proto__:musician
}


log(guitarist.alive);
log(guitarist.plays);
log(guitarist.strings);





