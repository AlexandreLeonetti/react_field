/* test */

const array1 = [1,2,3,4,5,6,7,8,9,10];

const init =0;

const sumWithInit = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, init);

console.log(sumWithInit);
