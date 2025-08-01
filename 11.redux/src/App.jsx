import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <div>Value: {{ value }.value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
