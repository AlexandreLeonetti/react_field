/* merge sorted arrays */

/* initialize a few arrays */
var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];

function merge(arrs) {
	let res = [];
	console.log(arrs);
	let iterArrs = arrs.map((a) => a[Symbol.iterator]());
	console.log(iterArrs);

	/* initialize a heap */
	let h = [];
	iterArrs.forEach((iterator, i) => {
		console.log("iterator", iterator);
		console.log(i);

		firstElt = iterator.next().value;
		if (firstElt !== undefined) {
			h.push([firstElt, i]);
			h.sort((a, b) => a[0] - b[0]);
		}
	});

	console.log(h);
	/* push and pop elements from the heap until its done */
    while(h.length>0){
        let smallestVal = h[0][0];
        let smallestArr = h[0][1];
        console.log(smallestArr,smallestVal)
        
        res.push(smallestVal);
        h.shift();

        let nxt = iterArrs[smallestArr].next().value;
        if(nxt!==undefined){
            h.push([nxt, smallestArr]);
            h.sort((a,b)=>a[0]-b[0]);
        }
        //h.push(next element)
        //h.sort
    }
	/* return the merged array */
    return res;
}


let r = merge([array1, array2, array3, array4]);
console.log(r);