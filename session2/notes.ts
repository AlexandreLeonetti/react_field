// some classical TS questions and answers
//https://www.typescriptlang.org/
// some example of type
type Human = {
    name : string ;
    age  : number ;
    gender: boolean;
}

type birdType = {
    wings : 2;
}

interface birdInterface {
    wings : 2;
}

// some interface :
interface Species {
   name : string;
   era  : string;
   size : number;
}

// 3 differences between interface and type.
/* interfaces can be extended using the extend keyword.
 * while types can be intersected or unionised.
 */
type owl = { nocturnal :  true } & birdType
type Robin = {nocturnal: false}  & birdInterfae

interface Peacock extends birdType {
    colourful : true;
    flies     : false;
}


interface Chicken extends birdInterface{
    colourful : false;
    flies     : false;
}


let owl : Owl = {wings : 2, nocturnal : true}
let chicken : Chicken = {wings : 2, colourful : false, flies : false}

//4 merging, 5 extending ok

// 6 imperative vs declarative :
// declarative : i order a pizza.
// imperative, give the receipen instructions.
// 7
//declarative
//let x = "test"
//x.toUpperCase() // TEST
//imperative
/*
function toUpCase(s){
    let upperS=""
    for (i=0; i<s.length; i++){
        upperS.append(s[i].toUpperCase);
    }

    return upperS

*/

// 8 relationship between React and Dom.
// react operate state changes on Virtual Dom.
// compute the difference between prevState VDOM and current state VDOM
// then renders the final result to real DOM. this process is much faster.

//9 what are props and components ?
//componenets are reusable blocks of code. they work the same as javascript
//functions but they return html or other components
//props is a short hand for properties
// they are properties that are passed from parent component to chidren components
// they are similar to arguments of js functions


//10 
// children are components placed in lower level in the vdom tree. parent components
// call children components.
//

// 12 templaste literals
// let t  = `this is a ${x} of template literal`;

//13 spread attributes
//var arr = [0,1,2]
//var arr2 = [...arr]

let obj1 = { a: 1, b:2}
let [a , b] = [3,4] // destructuring 
//
// hoc function



// 20 first class functions means they are variables. and can manipulated as such.
// 21 purity in javascript refers to functions who's variables are limited to
// function's scope and do not affect external environment.
// 25 : 
// functions and UIs.
// UI is a function of State. f(state){
//                                      returns  UI
//                                      }
                                      
