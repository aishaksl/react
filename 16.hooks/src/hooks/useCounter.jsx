import React, { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return {
    count,
    increase,
    decrease,
  };
}

export default useCounter;

// HOOKS
/*
	1.	Use state in functional components (useState)
	2.	Handle side effects like API calls or timers (useEffect)
	3.	Share logic easily across components via custom hooks
	4.	Access context (useContext) for global data
	5.	Work with mutable references (useRef) without re-rendering
*/
