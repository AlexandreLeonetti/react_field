import {useState, useEffect} from "react"
import Count from "./Count"

function App() {
    const [x, setX] = useState(0)
    const [count, setCount] = useState(0)


    function handleX(){
        setX(prev => prev+1)
    }
    console.log("rendered App")
    
    useEffect(()=>{
        const intervalOne = setInterval(()=>{
            setCount(prev=> prev+1)
        },1000);
    
        return() => {
            clearInterval(intervalOne);
        };
    },[]);



  return (
    <div className="App">
      <button onClick={handleX}>{x}</button>
      <div> {count} </div>    
      <Count/>
    </div>
  );
}

export default App;
