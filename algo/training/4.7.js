/* 4.7 p 32 */


function power(x,y){
        let result = 1.0;
        let power  = y;
        
        if(y<0){
            power = -power;
            x = 1/x;
        }

     while(power){
        if((power & 1)==true){
            result = result*x;
        }
         x= x*x;
         power = power>>1;
    

        }
    return result;

}




console.log(power(2,20))
