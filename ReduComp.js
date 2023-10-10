// useReducer is used to build useState
// use reducer is actually more primitive than useState
// when to use useState or useReducer ?

import './App.css';
import {useReducer} from "react"

const initialState =0;
const reducer= (state, action) => {
    switch(action){
      case 'increment' : 
        return state + 1;
      case 'decrement' :
        return state - 1;
      case 'reset' :
        return 0;
      default :
        return state
    }
}

function ReduComp() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div>Count : {count}</div>
       <button onClick={()=>dispatch("increment")} >increment</button>
       <button onClick={()=>dispatch("decrement")} >decrement</button>
       <button onClick={()=>dispatch("reset")} >reset</button>
    </div>
  );
}

export default ReduComp;