import "./App.css";
import Calculator from "./utils";
import { add, subtract } from "./utils";

console.log(add(5, 3));
console.log(subtract(5, 3));

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
