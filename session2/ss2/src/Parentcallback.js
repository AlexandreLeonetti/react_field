import {useState, useCallback} from "react"
import Button from "./Button"
import Title from "./Title"

function ParentCallBack(){
    const [salary, setSalary] = useState(0)
    const [age, setAge] =  useState(0)

/*
    const incSalary = () =>{
        setSalary(prev => prev+1000)
    }
    */
    const incSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary]);

    const incAge = useCallback(() =>{
        setAge(prev => prev+1)
    },[age]);
    

    return (
        <div>
            <Title/>
            <div>salary : {salary} </div>
            <Button handleClick={incSalary} text="increase Salary"/>

            <div>age : {age}</div>
            <Button handleClick={incAge} text="increase Age"/> 
        </div>
        )
}



export default ParentCallBack;


