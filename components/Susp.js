import React, {Suspense} from "react"

const UserData = React.Lazy(() => import("./UserData"));

function Susp(){
    return(
        <div>
            <h1> User Data </h1>
            <Suspense fallback={<div> Loading...</div>}>
                <UserData/>
            </Suspense>
        </div>
    );
};


export default Susp;

