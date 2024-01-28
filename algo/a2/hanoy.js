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
        /*for(let c in this.li){
            console.log(c);
        }*/
        //this.li.forEach(c => console.log(c));
        const fl = this.li.map(c => c.value);
        console.log(fl);
    }

}



let s1 = new Stack();
let s2 = new Stack();
let s3 = new Stack();

s1.add(4);
s1.add(3);
s1.add(2);
s1.add(1);

s1.show();
s2.show();
s3.show();

function Hanoy(s1,s2,s3){
    let l = s1.li.length;
    function recursion(init,medium,target,n){
        //console.log(n);
        if (n<=0) {
            return;
        }
        /*move n-1 disk from init  to medium */
        recursion(init,target, medium, n-1);
        /*move one disk from init to destination*/
       target.add(init.remove().value);
        /* move n-1 disk from medium to target */
        recursion(medium, init, target, n-1);
    }
    return recursion(s1,s2,s3,l);

}


Hanoy(s1,s2,s3);




s1.show();
s2.show();
s3.show();

