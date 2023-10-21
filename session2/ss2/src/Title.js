import React from "react"

function Title(){
    console.log("rendered Title")
    return(
        <div>
            <h2>Call Backs</h2>
        </div>
    )
}



export default React.memo(Title);

