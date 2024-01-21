class Stack{
    //constructor
    constructor(){
        this.theStack = [];
    }
    //check if stack empty
    isEmpty(){
        return this.theStack.length === 0;
    }

    height(){
        return this.theStack.length;
    }

    //get max element, throw err if empty
    getMax(){
        if(this.isEmpty()){
            throw console.error("this stack is empty, cannot get max");
        }else{
            return this.theStack.at(-1).max;
            /* the at method is necessary because 
            array[-1] points to a normal object property. indices are threated as string keys
            hence "-1", array[-1]="hello"
            */
        }
    }
    // pop element, throw err if empty
    popElement(){
        if(this.isEmpty()){
            throw console.error("this stack is empty, cannot pop");
        }else{
            return this.theStack.pop().element;
        }
    }
    // push element
    pushElt(x){
        this.theStack.push(
            {x,max :this.isEmpty()?x:Math.max(this.getMax(),x)}
        )
    }

    //print all elts
    printStack(){
        for(const c of this.theStack){
            console.log(c)
        }
    }

}

let s = new Stack;

s.pushElt(1);
s.pushElt(7);
s.pushElt(5);
s.pushElt(8);
s.printStack();
console.log(s)
console.log(s.getMax());
s.popElement();
console.log(s.getMax());