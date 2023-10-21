// this functions are applying the curring principle


function test (a){
   return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

x =test(1)(2)(3)
console.log(x)

