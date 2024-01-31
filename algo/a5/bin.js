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




