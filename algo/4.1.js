function parity(x){
    let par = 0;

    /* shift number to the right *
    perform XOR comparison on its LSB until no bit left
    */

    while(x){
        if(x&1){//x is a 1
            par = par ^ 1;
        }

        x = x>>1;
    }
    
    return par;

}


function createLookupTable(){
    let table = [];

    for( let i =0; i<(1<<16);i++){
        table[i]=parity(i);
    }

    return table;
}

function bigPar(Z){
    let bp = null;
    const BIT_MASK = 0xFFFFn;
    const MASK_SIZE=16n;

    const part1 = (Z)&BIT_MASK;
    const part2 = (Z >> MASK_SIZE)&BIT_MASK;
    const part3 = (Z >> (2n*MASK_SIZE))&BIT_MASK;
    const part4 = (Z >> (3n*MASK_SIZE))&BIT_MASK;
    console.log(part1,part2,part3,part4);
    
    bp = parTable[part1]^parTable[part2]^parTable[part3]^parTable[part4];

    return bp ;
}

const test = parity(9);
const parTable = createLookupTable();
const largenum = bigPar(BigInt(1048577));
//const lg2= bigPar(BigInt(9));
console.log(largenum);
console.log(parTable);

