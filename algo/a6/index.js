/* merge several arrays */

/* initialize a few arrays */
var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];




function merge(arrs){
    /* generate array of iterators for each arr */
    let iters = arrs.map((x) => x[Symbol.iterator]()); 
    let heap  = [];
    let res   = [];

    /* initialise the heap with each first element from arrays */


    iters.forEach((iter, idx)=>{
        /* push [val idx] into heap */
        let first = iter.next();

        heap.push([ first.value, idx ]);

        /* sort heap */
        heap.sort((a,b)=>{return a[0]-b[0];});

    });

    /* push other elements into the heap */
    while(heap.length>0){
        
        /* extract smallest element and index from heap */
        let[ smallestE, smallestIdx ]= heap.shift();

        /* push in heap the next elt that comes from the same iterator as smallest */
        res.push(smallestE);

        /* call next element of idx iterator iters[smallestIdx] */
        let nextE = iters[smallestIdx].next().value;
        if (nextE !== undefined){
            heap.push([nextE, smallestIdx]);
            heap.sort((a,b)=>a[0]-b[0]);
        }
    }


    return res;


}





let r = merge([array1, array2, array3, array4]);
console.log(r);
