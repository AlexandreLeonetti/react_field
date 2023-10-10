import {useState, useCallback} from "react"
import Count from "./Count"
import Button from "./Button" 
import Title from "./Title"
/* the re rendering causes react to create new references for each functions
in effect recreating them, and passing the new ref to props of <Button/>
components, thus triggering each <Button/> to re render
to prevent this we use the useCallback hooks and pass the state dependency 
(age for increment Age) and (salary for incrementSalary)
*/

function ParentCall(){
    const [ age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)


    const incrementAge = useCallback(()=>{
        setAge(age+1)
    }, [age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1000)
    }, [salary])


    return(
        <div>
            Parent component
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>increment age</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>increment salary</Button>

        </div>
    )
}


export default ParentCall;

