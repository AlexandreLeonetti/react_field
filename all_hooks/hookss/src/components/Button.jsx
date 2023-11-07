import React from "react"

function Button({handleClick, text}){
    console.log("Button rendered ", text)
    return(<div>
        <button onClick={handleClick}>click to increment</button>
    </div>)
}


export default React.memo(Button);