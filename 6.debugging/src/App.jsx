import { useState } from "react";
import "./App.css";

function App() {
  const [exam1, setExam1] = useState(0);
  const [exam2, setExam2] = useState(0);

  const average = () => {
    debugger; // Code stops here for inspection
    return console.log((exam1 + exam2) / 2);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={exam1}
          onChange={(e) => setExam1(Number(e.target.value))}
        />
        <input
          type="text"
          value={exam2}
          onChange={(e) => setExam2(Number(e.target.value))}
        />

        <button onClick={average}>Average</button>
      </div>
    </>
  );
}

export default App;

/*
  'debugger' stips code execution at that line
  Allows you to check variable values, state, and app flow
  Useful for finding logic errors step by step 
*/

// Remember to remove 'debugger' after testing
