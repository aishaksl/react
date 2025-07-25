import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("It runs EVERY TIME");
  });

  useEffect(() => {
    console.log("It runs on the FIRST RENDER");
  }, []);

  useEffect(() => {
    console.log("It runs on the FIRST RENDER and the FIRSTNAME state changes");
  }, [firstName]);

  useEffect(() => {
    console.log(
      "It runs on the FIRST RENDER and when the LASTNAME state changes"
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "It runs on the first render and when the FIRSTNAME OR LASTNAME value changes"
    );
  }, [firstName, lastName]);

  const nameChange = () => {
    setFirstName("Aisha");
  };

  const lastNameChange = () => {
    setLastName("Ksl");
  };

  return (
    <div>
      <div>
        <button onClick={nameChange}>Change name</button>
      </div>
      <div>
        <button onClick={lastNameChange}>Change lastname</button>
      </div>
    </div>
  );
}

export default App;
