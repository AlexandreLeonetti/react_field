/* write a simple program that demonstrate the hanoy tower game */


let a = [9,8,7,6,5,4,3,2,1,0];
let b = [];
let c = [];


function hanoy(a,b,c,n){
    if(n<1){
        return;
    }
    hanoy(a,c,b,n-1);
    let temp = a.pop();
    c.push(temp);
    hanoy(b,a,c,n-1);

}

hanoy(a,b,c,a.length);
console.log(a);
console.log(b);
console.log(c.toString());




