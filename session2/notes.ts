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
//



