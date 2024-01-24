

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


function createSafeCalculator (calculator) {
 return {
 // proxied method
 divide () {
 // additional validation logic
 const divisor = calculator.peekValue()
 if (divisor === 0) {
 throw Error('Division by 0')
 }
// if valid delegates to the subject
 return calculator.divide()
 },
 // delegated methods
 putValue (value) {
 return calculator.putValue(value)
 },
 getValue () {
 return calculator.getValue()
 },
 peekValue () {
 return calculator.peekValue()
 },
 clear () {
 return calculator.clear()
 },
 multiply () {
 return calculator.multiply()
 }
 }
}
const calculator = new StackCalculator()
const s = createSafeCalculator(calculator)

s.putValue(3);
s.putValue(7);
const res = s.multiply();
console.log(res);

