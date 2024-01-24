

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
        const dividend = this.getValue();
        const divisor  = this.getValue();
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
c1.putValue(2);
console.log(c1.multiply());
