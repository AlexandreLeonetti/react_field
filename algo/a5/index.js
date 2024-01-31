/* merge several arrays using an iterator */


var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];



function merge(arrs){
    let res = [];
    let heap= [];
    let iters = arrs.map((x)=> x[Symbol.iterator]());

    iters.forEach((iter, i) =>{
        let first  = iter.next().value;
        let firstIdx = i;
        
        heap.push([first, firstIdx]);
        heap.sort((a,b)=>a[0]-b[0]);
        console.log(heap.toString());
            
    });

    while(heap.length>0){


        /* poop smallest element of heap and inject into res */
        let smallest = heap.shift();

        /* smallest value will be taken to res
         * while smallest idx will be used to call next iter */
        let smallestVal = smallest[0];
        let smallestIdx= smallest[1];

        let next = iters[smallestIdx];

        if(smallestVal!==undefined){
            res.push(smallestVal);
            let nextE = next.next().value;
                console.log("nextE",nextE);
            heap.push([nextE,smallestIdx]);
            heap.sort((a,b)=>a[0]-b[0]);
            
        }

    }


    return res.toString();
}


console.log(merge([array1, array2, array3, array4]));
