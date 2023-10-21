import {useState, useCallback} from "react"

function ParentCallBack(){
    const [salary, setSalary] = useState(0)
    const [age, setAge] =  useState(0)


    const incSalary = () =>{
        setSalary(prev => prev+1000)
    }


    const incAge = () =>{
        setAge(prev => prev+1)
    }


    return (
        <div>
            <Title/>
            <div>salary : {salary} </div>
            <Button handleClick={incSalary}>increase Salary</Button>

            <div>age : {age}</div>
            <Button handleClick={incAge}> increase Age</Button>
        </div>
        )
}



export default ParentCallBack;


