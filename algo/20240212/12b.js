/* write an anon letter out of mag letters */

function isP(letter, m){
    let isPossible = false;
    let counter    = new Map();
    /* count all occurrences of characters in mag*/
    for (const c of mag ){
        if(!counter.has(c)){
            counter.set(c,1);
        }else{
            let n = counter.get(c);
            counter.set(c, n+1);
        }
    }
    console.log(counter.get("h"));
    console.log(counter);


    /* now substract all each character from the map as
     * we read through the letter
     * */
    
    for(const c of letter){
        if(counter.size===0){
            return false;
        }
        if(counter.has(c)){
            if(counter.get(c)===0){
                counter.delete(c);
            }else{
                let n = counter.get(c);
                counter.set(c,n-1);
            }
        }else{
            return false;
        }


    }
    /* return false if map is empty and letter still has characters */



    /* if letter empty and magazine has 0 or more character left
     * then return true */



    return counter.size>=0;
}

const aLetter = "hello i am one";
const mag = "eno mai oh lle";
//const mag = "abcdf";

console.log(isP(aLetter, mag));
