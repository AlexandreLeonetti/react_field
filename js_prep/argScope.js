
function foo(bar, getBar= () => bar){
    var bar = 1111;
    var x = 55;
    console.log(getBar());
}


foo(7);

/*
 * arguments have their own scope, the getBar function is only defined inside
 * the arguments, so it takes the bar arg,
 * getBar, does not have access to the function scope.
 */


