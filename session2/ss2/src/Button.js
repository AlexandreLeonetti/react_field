import React from "react"
function Button({handleClick, text} ){
    //console.log("Button rendered")
    console.log(text, "rendered")
    return(
        <div>
            <button onClick={()=>{handleClick()}}> {text}</button>
        </div>
    )
}


export default React.memo(Button);
