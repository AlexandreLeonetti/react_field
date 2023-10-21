import {useState, useMemo} from "react"


function Count(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(prev => prev +1)
    }

    const increment2 = () => {
        setCount2(prev => prev +1)
    }
/*
    const isEven = () => {
        for(let i=1;i<300000000;i++){}
        return count2 % 2 == 0;
    }
    */

    const isEven = useMemo(()=>{
        for ( let i=1; i<300000000;i++){}
        return count2 % 2 == 0;
    },[count2])

    

    return(
        <div>
            test
            <button onClick={increment1}>count 1 {count1}</button>
            <button onClick={increment2}>count 2 {count2}</button>
            <div>{isEven ? "count 2 is even" : "count 2 is Odd"}</div>
        </div>
    )
}


export default Count;
