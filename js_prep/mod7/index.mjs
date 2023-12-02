import defaultFoo, { foo } from "./module.mjs";

setTimeout(()=> {
    console.log("default", defaultFoo);
    console.log("named import/export ",foo);
}, 2000);



