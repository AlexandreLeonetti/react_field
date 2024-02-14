/* write a program that can convert any number to string, and string */



let a = "12345678";
let b = "-987";

function strToNum(s){

    let num  = 0;
    let sign = s[0]=="-"?-1:1;

    if(sign===-1){
        s=s.slice(1,s.length);
    }

    /* check if first character is hyphen */
    for (let c of s){
        num = num*10 + parseInt(c);
    }

    return num*sign; 
    

}


let res1 = strToNum(a);
//console.log(res1);
let res2 = strToNum(b);
//console.log(res2);


let c = 9988776655;
let d = -7654321;


function numToStr(n){
    let s = "";
    let sign = "";

    /* if n < 0, s,append - , and n = abs(n) */

    if(n<0){
        sign=sign.concat("-");
        n=Math.abs(n);
        console.log(s);
    }

    while(n>0){
        let c = Math.floor(n/10);
        let r = Math.floor(n%10);
        let cs = `${r}`;
        s= s.concat(cs);
        n=Math.floor(n/10);
        //console.log(c);
    }

    let arr = s.split();
    arr = arr.reverse();
    s = arr.join("");

    return sign.concat(s);
}


let res3 = numToStr(c);
let res4 = numToStr(d);

console.log(res3);
console.log(res4);
