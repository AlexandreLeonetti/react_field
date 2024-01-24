class Stack {
    constructor(name = "x") {
        this.name = name;
        this.currentArr = [];
    }

    isEmpty() {
        return this.currentArr.length === 0;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("There is no element in this stack");
        }
        return this.currentArr.pop();
    }

    push(x) {
        this.currentArr.push(x);
        return x;
    }

    show() {
        console.log(this.currentArr);
        return true;
    }
}


// initializing some stack a b and c for the toh function
const stackA = new Stack("A");
const stackB = new Stack("B");
const stackC = new Stack("C");

stackA.push(4);
stackA.push(3);
stackA.push(2);
stackA.push(1);

console.log(stackA.currentArr);
console.log(stackB.currentArr);
console.log(stackC.currentArr);

function towerOfHanoi(n, source, auxiliary, target) {
    if (n > 0) {
        towerOfHanoi(n - 1, source, target, auxiliary);
        target.push(source.pop());
        towerOfHanoi(n - 1, auxiliary, source, target);
    }
}
towerOfHanoi(4, stackA, stackB, stackC);

console.log("After stacking:");

console.log(stackA.currentArr);
console.log(stackB.currentArr);
console.log(stackC.currentArr);
