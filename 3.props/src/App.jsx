import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  return (
    <div>
      <Container>
        <Product productName="pants" productPrice={40} />
        <hr />
        <Product productName="shoe" productPrice={20} />
      </Container>
    </div>
  );
}

export default App;

// This is the main App component.
// It imports and uses the Container and Product components.
// It renders multiple Product components inside the Container.
