import "./App.css";

// This is our main React component
function App() {
  let a = 15;
  const name = "John";

  const x = 7;
  const y = 3;

  const age = 20;

  const grades = [70, 40, 60];
  const average = (grades[0] + grades[1] + grades[2]) / grades.length;

  const fruits = ["apple", "banana", "orange"];

  return (
    // Inside the return, we use JSX (JavaScript + HTML together).
    // To use JavaScript expressions inside HTML in React, we must put them inside curly braces { }.

    <div>
      <p>a:{a}</p>
      <p>costumer name: {name}</p>
      <p>x + y = {x + y}</p>
      <p>{age >= 18 ? "You are an adult." : "You are underage"}</p>
      <p>{average >= 50 ? "You passed the exam" : "You failed the exam"}</p>
      <p>
        {fruits.map((fruit, index) => (
          <div key={index}>{fruit}</div>
        ))}
      </p>
      {/* 
       When we use map to loop through each element, React requires a "key" value for each child element.
       If we don't provide it, we get the warning: "Each child in a list should have a unique 'key' prop."
       That's why we need to add a key to each element when using map. */}
    </div>
  );
}

export default App;
