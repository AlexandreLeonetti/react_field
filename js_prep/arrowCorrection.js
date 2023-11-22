/* let's write a constructor that works ! */

function Num(){
    this.getNum = () => 10;
}

Num.prototype.getNum = () => 20;//the constructor defined in the function has priority

let num = new Num();

console.log(num.getNum());


class Str{
    getStr = () => "helloWorld";
}

Str.prototype.getNumber = () => 888;

str1 = new Str();
console.log(str1.getStr());
console.log(str1.getNumber());
