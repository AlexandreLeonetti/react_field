import React, {useState, useCallback} from "react"
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"

/*
*when not using useCallback, a new reference is allocated for each functions in CallB, 
triggering re render of other unrelated components

useCallback returns a memoized version of the function that only changes
if one of the dependencies has changed. 
*/


function CallB(){
    const [age, setAge] = useState(25)
    const   [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])


    const incrementSalary = useCallback(() => {
        setSalary(salary+ 1000)
    },[salary]);

    return(
        <div>
            <Title text="Use Callback"/>
            <Count text="Age" count={age} />
            <Button text="Age" handleClick={incrementAge}>Increment the age</Button>
            <Count text="Salary" count={salary}/>
            <Button text="Salary" handleClick={incrementSalary}>Increment the Salary</Button>

        </div>
    )

}


export default CallB;