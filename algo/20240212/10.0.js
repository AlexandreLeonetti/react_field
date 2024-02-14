/* write a program thaat can merge several arrays using iterators */


var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88,1000];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];


function merge(arrs){
    let res=[];
    /* create a list of iterrators and an empty heap */
    let heap=[];
    let iters=arrs.map((a)=>a[Symbol.iterator]());
    

    /* initialise the heap */
    iters.forEach((iter,i)=>{
        heap.push({val:iter.next().value,i}) 
        heap.sort((a,b)=>{return(a.val-b.val)});
    });

    /* go through all the elements */
    while (heap.length>0){
        let min = heap[0].val;
        let minIdx = heap[0].i;
        res.push(heap.shift().val);

        // push next iter next val in heap.
        let nxt = iters[minIdx].next();

        if(nxt.value !== undefined){
            heap.push({val:nxt.value,i:minIdx});
            heap.sort((a,b)=>a.val-b.val);
        }
    }
    

    return res;
}



const result = merge([array1,array2,array3,array4]);
console.log(result.toString());




