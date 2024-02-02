/* merge several arrays */

/* initialize a few arrays */
var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];




function merge(arrs){

        let res = [];
        let heap=[];
        /* make list of iterators */
        let iters = arrs.map((a)=> a[Symbol.iterator]());

        /* initialize a heap */
        iters.forEach((iter, i)=>{
            let smallestE = iter.next().value;
            let sIdx        = i;

            heap.push([smallestE, sIdx]);
            heap.sort((a,b)=> a[0]-b[0]);
        });
        

        /* loop through all iters and heap elements */
        while(heap.length>0){
            /* take heap smallest e and inject in res */
            let [smE, nextIdx] = heap.shift();
            res.push(smE); 
            
            /* call iterator using nextIdx */
            let nextVal = iters[nextIdx].next();
            console.log(nextVal);
            if(nextVal.value!==undefined){
                let nextValue = nextVal.value;

                heap.push([nextValue, nextIdx]);
                heap.sort((a,b)=>a[0]-b[0]);

            }

        }

        return res;
}





let r = merge([array1, array2, array3, array4]);
console.log(r);
