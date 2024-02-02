import {Stack} from "./stack.js";


console.log(Stack);


/* create 3 stacks for hannoy tower game */

let s1 = new Stack;
let s2 = new Stack;
let s3 = new Stack;

s1.add(5);
s1.add(4);
s1.add(3);
s1.add(2);
s1.add(1);

s1.show();
s2.show();
s3.show();

   function recursion(start,mid,target,i){ 
       if(i<=0){
           return
       }
        // move n-1 disk from start to mid using target
           recursion(start,target,mid,i-1);
            
        //move one disk from start to target
        let r = start.removeE();
       target.add(r.value);
       // move n-1 disk from mid to target using start
           recursion(mid,start,target,i-1);
   }
function tower(start, mid, target, n){

        return recursion(start,mid, target, n);
    
}


tower(s1,s2,s3,5);
console.log("========");
s1.show();
s2.show();
s3.show();


