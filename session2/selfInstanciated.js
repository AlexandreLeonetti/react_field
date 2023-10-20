// simple self instantiated function

console.log("pre"); // produce error if no semicolon avfter this console.log()
(function test(){
    console.log("self");
    return 0
})()

console.log("ok")


