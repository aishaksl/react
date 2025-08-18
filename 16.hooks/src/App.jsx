import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { count, increase, decrease } = useCounter();

  const { open, change } = useToggle();

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {count}
        <div>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
      </div>

      <div className="space-y-5">
        {open && (
          <div className="w-md h-2xl border rounded-md bg-white text-black ">
            box
          </div>
        )}
        <button onClick={change}>{open ? " Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
