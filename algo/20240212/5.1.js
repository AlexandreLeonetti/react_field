/* here is an illustration of dutch flag problem. */


let a = [0,2,2,1,2,1,2,0,2,0,1,2,0,1,2,1,2,0,0,0]
console.log(a.toString());

function dutch(a){// sorting elements in place.
    /* one loop to sort small elements to the left using pivot of 1 */
    for (let i=0; i< (a.length -1); i++){
        for( let j=i+1; j<=(a.length-1); j++){
            if(a[j]<1){
                [a[i],a[j]]=[a[j],a[i]];
                break;
            }
        }
    }





    /* second loop sorting bigger elts tothe right using pivot of 1 */


    for(let i =(a.length-1);i>0;i--){
        for(let j=0;j<i;j++){
            if(a[j]>1){
                [a[i],a[j]]=[a[j],a[i]];
                break;
            }
        }
    }

console.log(a.toString());
}


dutch(a);
