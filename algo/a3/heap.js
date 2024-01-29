/* merge sorted arrays */

/* initialize a few arrays */
var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];

function merge(arrs){
    /* initialize results in a variable */ 
    let res = [];
    let minHeap = [];
    /* make some iterator out of each of them */
    let iterArrs = arrs.map((x)=> x[Symbol.iterator]());

    /*initialise some heap with each first elements */
    iterArrs.forEach((iterator, i) =>{
        let firstElt = iterator.next().value; 
        let firstIdx = i;
       
        /* push first element into minHeap */
        minHeap.push([firstElt, firstIdx]);

        /* sort minHeap */
        minHeap.sort((a,b)=>a[0]-b[0]);
        console.log(minHeap);

    })

    
    /* while loopp through all elements until heap is void. */
    
    while(minHeap.length>0){

            let nextElt = null;
            let nextIdx = null;

            /* pop smallest elt from heap and injeact in res */
            let popped = minHeap.shift();
            /* this implies saving the smallest idx from the popped elt */
            nextIdx = popped[1];
            nextElt = popped[0];
            
            /* push elt from smallest array */
            if(nextElt!==undefined){
                res.push(nextElt);
            
            /* call iter next on the array to push in minHeap and refill */
            let nxtElt = iterArrs[nextIdx].next();
            
            minHeap.push([nxtElt.value, nextIdx]);
            minHeap.sort((a,b) => a[0]-b[0]);
                
            }

    }

    return  res;
}


let r = merge([array1, array2, array3, array4]);
console.log(r);
