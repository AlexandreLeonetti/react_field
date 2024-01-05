// module.mjs

export {foo} ;

export default function foo (){};

setTimeout(()=>{
    foo = "baz";
},1000);


