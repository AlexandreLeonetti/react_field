//const proxy = new Proxy(target, handler);

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
const safeHandler = {
    get : (target, property) => {
        if(property === "divide"){
            /*proxied method*/
            return function(){
                const divisor = target.peekValue();
                if(divisor === 0){
                    throw Error("division by 0 error");
                }
                /* if valid delegate */
                return target.divide();
            }
        }

        /* return delegated other properties */
        return target[property];
    }
}

const s1 = new Proxy(c1, safeHandler);
s1.putValue(3);
s1.putValue(0);
//const res = s1.multiply();
const res = s1.divide();
console.log(res);



