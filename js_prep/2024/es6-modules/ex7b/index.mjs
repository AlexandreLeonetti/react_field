// index.mjs

import defaultFoo, {foo} from "./module.mjs";

setTimeout(()=>{
    console.log(foo);
    console.log(defaultFoo);
},2000);



setTimeout(()=>{
    console.log(foo);
    console.log(defaultFoo);
},200);

