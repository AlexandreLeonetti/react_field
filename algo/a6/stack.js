class cpl{
    constructor(value=0,max=0){
        this.value=value;
        this.max = max;
    }

}
export class Stack  {
    



    constructor(){
       this.s = []; // the inner array is named s. 
    }


    /* isEmpty()
     * addElement()
     * removeElement()
     * getMax()
     * showStack()
     */


    isEmpty(){
        return this.s.length===0;
    }

    removeE(){
        if(!this.isEmpty()){
            return this.s.pop();
        }
    }
    
    getMax(){
        if(this.isEmpty()){
            throw Error("cannot get max, stack empty");
        }
        //console.log(this.s[this.s.length-1].max); 
        return this.s[this.s.length-1].max;

    }

    add(x){
        let m = this.isEmpty()?x: Math.max(this.getMax(),x);
        let temp = new cpl(x,m);
        this.s.push(temp);
    }


    show(){
    /*    if(this.isEmpty()){
            //throw Error("cannot display stack it is empty");
            console.log("{}");
        }*/
        let res = []
        
        this.s.forEach(c=>{
            res.push(c.value);//console.log(c));
       });
       this.isEmpty()?console.log("[]"): console.log(res.toString()); 
        return res.toString();
    }


}

/*
let s1 = new Stack();
s1.add(9);
//s1.add(57);
//s1.add(22);
//s1.add(20);
s1.removeE();
s1.show();
*/
