import {useContext, createContext} from "react"

const ThemeContext = createContext();


// 2 provider component
function ThemeProvider({children}) => {
    const theme = "light";
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

//3 Consumer Component
function ThemeButton(){
    const Theme = useContext(ThemeContext);

    return(
        <button styles={{backgroundColor:theme}}>
        Click me
        </button>
    );
}


//4 Usage in the app
function Cont() {
    return(
        <ThemeProvider>
            <ThemeButton/>
        </ThemeProvider>
    );
}

export default Cont;


