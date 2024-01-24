

class StackCalculator{

    constructor(){
        this.stack = [];
    }

    putValue(val){
        return  this.stack.push(val);
    }

    getValue(){
        return this.stack.pop();
    }

    peekValue(val){
       return this.stack[this.stack.length -1]; 
    }


    clear(){
        this.stack = [];
    }


    divide(){
        const divisor = this.getValue();
        const dividend  = this.getValue();
        const result   = dividend/divisor;
        this.putValue(result);
        return result;
    }

    multiply(){
        const multiplicand = this.getValue();
        const multiplier   = this.getValue();
        const result = multiplicand*multiplier;
        this.putValue(result);
        return result;
    }
}


const c1 = new StackCalculator();
c1.putValue(3);
c1.putValue(0);
//console.log(c1.multiply());



class SafeCalculator{
    constructor(calculator){
        this.calculator = calculator;
    }

    //getvalue
    getValue(){
        return this.calculator.getValue();
    }

    //putvalue
    putValue(val){
        return this.calculator.putValue(val);
    }
    //peekvalue
    peekValue(){
        return this.calculator.peekValue();
    }
    //clear
    clear(){
        return this.calculator.clear();
    }

    //multiply
    multiply(){
        return this.calculator.multiply();
    }
    //divide
    divide(){
        const divisor= this.peekValue();
        if(divisor === 0){
            throw Error("division by 0");
        }
        return this.calculator.divide();
    }
}

const safe1 = new SafeCalculator(c1);
let one = safe1.divide();
console.log(one);

