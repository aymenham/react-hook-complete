import { useState } from "react";

function useCounter(initialCount: number = 0, step: number = 1) {
  const [counter, setCounter] = useState<number>(initialCount);

  const incrementCounter = () => {
    setCounter((prevCounter: number) => prevCounter + step);
  };

  const decrementCounter = () => {
   if(counter> 0) setCounter((prevCounter: number) => prevCounter - step);
  };

  return {
    counter,
    incrementCounter,
    decrementCounter,
  };
}

export default useCounter;
