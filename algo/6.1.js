function stringToInt(s){
    let n =0;
    let sign = s[0]=="-"?-1:1;

    if(sign==-1){
        s=s.slice(1);// slice at index 1 instead of 0
    }
    n=s.split('').reduce((runningSum, digit)=>runningSum*10+parseInt(digit,10),0);
    console.log(n)
    return n*sign;
}


let one = stringToInt("9999");
let two = stringToInt("-34");
console.log(one)
console.log(two)


/* string to int using a for of loop (using an iterator over a string) */

function stoInt(s){
    let sign = 1;
    let res  = 0;
    if(s[0]==="-"){
            sign = -1;
            s= s.slice(1);
    }

    for( let c of s){
            res = res*10 + parseInt(c);
    }
    return sign*res;
}


let three = stoInt("888");
let four = stoInt("-89");

console.log(three, four);




/* int to string */

function intToString(entry){
    let isNegative = false;
    if(entry<0){
        isNegative = true;
        entry = -entry;
    }

    let res = '';
    while(entry>0){
        const digit = entry %10;
        res= String.fromCharCode(digit + '0'.charCodeAt(0))+ res;// check the documentation about charCodeAt
        entry = Math.floor(entry/10);
    }


    return isNegative? '-'+res: res;
}


let a = intToString(-123);
let b = intToString(12345);
console.log(a, typeof(a));
console.log(b, typeof(b));