// module

let foo = "bar";

export {foo}; // this exports "baz";
//export {foo as default}; // executes first
export default foo;// exports value of foo,so, "bar"


setTimeout(()=> {
    foo="baz"; // this only affects named exports.
}, 1000);


