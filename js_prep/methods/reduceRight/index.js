const a = [1,2,3,4,5,6,7,8,9,10];
const init = 0;

const x = a.reduceRight((accumulator, curVal) => {
    return accumulator + curVal;
},init);


console.log(x);

