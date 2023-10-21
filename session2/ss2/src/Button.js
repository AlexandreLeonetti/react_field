function Button(){

    return(
        <div>
            <button onClick={()=>{props.handleClick()}}> {text}</button>
        </div>
    )
}


export default Button;
