import {useReducer} from "react";


const initialState = 0
const reducer      = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset' :
            return 0;
        default :
            return state;
    }
}

function Red(){
    const [count, dispatchCount] = useReducer(reducer, initialState)


    return (
        <div>
            reducer {count}
            <button onClick={()=>dispatchCount("increment")}>increment</button>
            <button onClick={()=>dispatchCount("decrement")}>decrement</button>
            <button onClick={()=>dispatchCount("reset")}>reset</button>
        

        </div>
    )
}




export default Red;
