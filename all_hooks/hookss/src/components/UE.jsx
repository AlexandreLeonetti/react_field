import { useState, useEffect } from 'react';

function Counter ( ) {
  const [counter1, setCounter1] = useState(0);
    console.log("Use Effect rendered")
  useEffect(() => {
    const interval1 = setInterval(()=>{
        setCounter1(prev => prev+1);
    }, 1000);

    return () => {
        clearInterval(interval1);
    };
  }, [counter1]);

  return (
    <>
    <div>Counter 1 : {counter1}</div>
    </>
  );
}

export default Counter;