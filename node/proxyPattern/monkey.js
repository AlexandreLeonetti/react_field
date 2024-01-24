

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


const c1= new StackCalculator()

function monkeyPatch  (c){
    const divideOrig = c.divide;
    
    c.divide = () => {
        const divisor = c.peekValue();
        if(divisor === 0){
            throw Error("cannot divide by 0");
        }
        return divideOrig.apply(c);
    }

    return c;
}


const safe = monkeyPatch(c1);

c1.putValue(3);
c1.putValue(8);

const res = c1.multiply();
console.log(res);

