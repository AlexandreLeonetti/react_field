/* write an anon letter out of magazine letters */


function isP(letter, m){
    let isPossible = false;
    let counter     = new Map();
    /* count each occurrences of characters in the mag
     * and store them in a map (set ?)
     * */

    for (const c of m){
        counter.set(c, (counter.get(c) || 0) + 1);
    }

    /* now substract each character from the map using delete
     * while going trough the letter
     * */

    for ( const c of letter){
        if(counter.has(c)){
            counter.set(c, counter.get(c)-1);
            if(counter.get(c) === 0){
                counter.delete(c);
            }
        }else{
            isPossible = false;
            break;
        }
    }

    /* if the mag is empty, all character in the letter
     * are present in the magazine
     */

    isPossible = counter.size === 0 ;

    return isPossible;
}


const aLetter = "hello i am one";
const mag = "eno mai oh lle";

console.log(isP(aLetter, mag));


