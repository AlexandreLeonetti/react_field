/* write a program that will return the intersection of two arrays,
 * these arrays are already sorted, so take advantage of it.
 * */

const A = [1, 2, 2, 3, 4, 5, 6, 7, 13];
const B = [2, 3, 5, 6, 8];

function isInArr(a,x){
    /* return true if elt is in arr */

    const i = a.findIndex((e)=> e===x);
    return i !== -1;// true if index i, different from -1
}



function inter(a,b){

    const x = a.filter((e,i)=>{
        if(i==0 && isInArr(b,e)){
            return true;
        }
        else if( a[i-1]!==e && isInArr(b,e)){
            return true;
        }
    });
    return x;
}


console.log(inter(A,B));
