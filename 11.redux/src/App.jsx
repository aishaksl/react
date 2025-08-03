import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./userList";

function App() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>Value: {{ value }.value}</div>
        <div>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
      </div>
      <div>
        <UserList />
      </div>
    </>
  );
}

export default App;
