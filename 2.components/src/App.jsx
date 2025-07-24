import "./App.css";
import Calculator from "./utils";
import { add, subtract } from "./utils";
// import { add as plus } from './utils';

// console.log(plus(5, 3)); // 8
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
