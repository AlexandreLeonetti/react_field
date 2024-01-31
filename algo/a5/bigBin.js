/* compute binary parity of some integer */


let a = 1025; // 2 power 10

function parity(x){
    let par = 0;

    while(x>0){
        let i = x&1
        par = i^par;
        x = x>>1;
    } 


    return par; // returns true if number of 1 is even
}

console.log(parity(a));



/* generate a parity table */
function hashTab(){
    let tab = [];
    for(let i=0 ; i< (1<<16); i++){
        tab[i] = parity(i);
    }

    return tab;
}

let hash = hashTab();
/* calculate parity of big integers */

function test(z){
    let finPar = null; 
    const MASK = 0xFFFFn;
    const maskSize = 16n;
   
    let part1 = z&MASK;
    let part2 = (z>>maskSize)&MASK;
    let part3 = (z>>maskSize*2n) & MASK;
    let part4 = (z>>maskSize*3n) & MASK;


    //finPar = parity(part1)^parity(part2)^parity(part3)^parity(part4);
    finPar =  hash[part1]^hash[part2]^hash[part3]^hash[part4];  
    return finPar;
    /* final keyword ??? */
}




console.log("big");
let t= test(1048576n);
let u= test(1048577n);
let v= test(1048578n);
let w= test(1048579n);


console.log(t,u,v,w);
