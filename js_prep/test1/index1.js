/* test */


setTimeout(()=>{ // macro task queue. least priority.
    console.log("in setTimeout");
},0);

console.log("first consoleLog"); //direct exe
_as();
new Promise(res => {
    for(let i=0; i<100000000; i++){}
    console.log("promise instantiated");
    res();
}).then(console.log("then"));
_as();
console.log("last console");
 
async function _as (){
    for(let i=0; i<1000000000; i++){};
    const x = await console.log("async");};




/*
 * exprected :
 * 2
 * 5
 * 1\
 * 3
 * 4*/
