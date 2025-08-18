import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      {count}
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
