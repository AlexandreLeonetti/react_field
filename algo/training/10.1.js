/* merge several sorted arrays */

let a1 = [-3,-1,0,4,5,9,12,14,200,500];
let a2 = [-3,-2,-1,0,1,2,3,4,4,5,6];
let a3 = [5,10,15,20,25,30,35];

function merge(arrs){
    let res = [];
    /* attach an iterator to each arrs  */
    let iters = arrs.map(i => i[Symbol.iterator]());

    /* form a heap using sort */
    let heap = [];
    iters.forEach((it,index) => {
       heap.push([it.next().value, index]);
       heap.sort((a,b)=> a[0]-b[0] );
    });

    /* pass each element from arrs to the heap */
    while(heap.length!==0){
        let smallestBlock = heap.shift();
        let smallestIdx = smallestBlock[1];
        console.log(heap);
        res.push(smallestBlock[0]);


        /* search next element */
        let nextBlock = iters[smallestIdx].next();
        if(nextBlock.done === false){
            heap.push([nextBlock.value, smallestIdx]);
            heap.sort((a,b)=>a[0]-b[0]);
        }
    }

    /* each heap smallest elt is injected into the res array */

    return res;
}


const output = merge([a1,a3,a2]);
console.log(output);
