/* arrow functions don't have a prototype
 * arrow functions can't be used as constructor
 */


const Num = () => {
    this.getNum = () => 10 ;// this does not work !!
}

Num.prototype.getNum = () => 20;// returns typeError, no proto on arrow func !

const num = new Num();

console.log(num.getNum);
