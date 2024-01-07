
let price = 44;
let step  = 1.075;
console.log("step", step)
for (let i = 1; i<15; i++){
    price = price*step;
    console.log(price);
}


console.log("final price", price);

