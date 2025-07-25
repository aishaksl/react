import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [names, setNames] = useState(["Tim", "Breade", "Clara", "John"]);
  const [userInfo, setUserInfo] = useState({
    username: "John",
    password: "1212",
  });
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setFirstName("Jack");
  };

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {/* Example 1 */}
      <div>
        <div>{firstName}</div>
        <div>
          <button onClick={handleChange}>Change the name </button>
        </div>
      </div>
      {/* Example 2 */}
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      {/* Example 3 */}
      <div>
        {show ? (
          <div>
            {userInfo.username}
            {userInfo.password}
          </div>
        ) : (
          <div>Dont show</div>
        )}
      </div>
      {/* Example 4 */}
      <div>{count}</div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Increase</button>
      </div>
    </div>
  );
}

export default App;

/*
   const [state, setState] = useState(initialValue);

    state: stores the current value.
		setState: updates the value.
		initialValue: the starting value.
*/

/*
   When the state value changes, the component re-renders.
   This means React re-runs the component function to update the UI with the new state.
   "Render" = drawing JSX to the screen.
*/
