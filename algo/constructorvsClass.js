/* constructor test */

const test = {a : 1, b:2} ;

class coord {
    constructor ( x = 0, y=0){
        this.x = x;
        this.y = y;
    }
}

let oneone= new coord(1,1);


const coordinates =  function(x=0,y=0){
    this.x = x;
    this.y = y;

}
 let twotwo =  new coordinates(2,2);
 console.log(oneone)
 console.log(twotwo)