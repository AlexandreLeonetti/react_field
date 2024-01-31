let a = [0,1,2,2,2,1,1,0,0,1,2,1,1,0,1,0,2,2];


function flag(arr,c){
    for(let i=0; i<arr.length-1;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[j]<c){
                [arr[i],arr[j]]=[arr[j],arr[i]];
            break;
            }
        }
    }

 console.log(arr.toString());   
    for(let i  =arr.length-1; i>0;i--){
        for (let j= 0; j<i; j++){
            if(arr[j]>c){
                [arr[j], arr[i]] = [arr[i],arr[j]];
                break;
            }
        }
    }

 console.log(arr.toString());   
    
    return arr;
}


flag(a,1);
