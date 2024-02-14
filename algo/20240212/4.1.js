let num = 1025;


function parity (x){
    let par = 0;
    /* compare each digit in its binary form and shift them to the right */
    while (x>0){
        let u = x & 1;
        par = u ^ par;

        //shift right;
        x = x >> 1;
    }

    return par;
}


const p = parity(num);
console.log(p);

let hash = [];
for (let i=0; i<(1<<16);i++){
    hash[i]=parity(i);
}

console.log(hash[1025]);


function bigPar(z){
    const MASK = 0xFFFFn
    
    const part1 = z & MASK;
    const part2 = (z >> 16n) & MASK;
    const part3 = (z >> 32n) & MASK;
    const part4 = (z >> 48n) & MASK;
    console.log(part1,part2,part3,part4);
    return  hash[part1]^hash[part2]^hash[part3]^hash[part4] ;



}


const p2 = bigPar(13244380033n);
console.log(p2);
