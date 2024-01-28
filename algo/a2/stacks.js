/* build a stack with max API */
class Elt{
    constructor(e, max){
        this.value = e;
        this.max   = max;
    }
}

class Stack{
    constructor(){
        this.li = [];
    }

    /* isEmpty
     * getMax
     * add
     * remove
     * show stack
     * */

    isEmpty(){
        return this.li.length === 0;
    }

    getMax(){
        if(this.isEmpty()){
            throw Error("stack empty, cannot get ");
        }
        return this.li[length -1].max; 
    }


    add(x){
        this.li.push(
           new  Elt(x, this.isEmpty()?x:Math.max(this.li[this.li.length-1].max, x))
        )
    }

    remove(){
        if(this.isEmpty()){
            throw Error("stack is empty");
        }
        return this.li.pop();
    }

    show(){
        for(let c in this.li){
            console.log(c);
        }
        this.li.forEach(c => console.log(c));
    }

}



let s1 = new Stack();
s1.add(9);
s1.add(7);
s1.add(5);
s1.add(12);

s1.show();

