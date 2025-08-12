import { useState } from 'react';
import './App.css'

function App() {
  // 1. boolean
  const isActive: boolean = true;

  // 2. number
  const age: number = 25;
  const price: number = 19.99;

  // 3. string
  const message: string = "TypeScript Rocks";

  // 4. bigint
  const big: bigint = 9007199254740991n; //	bigint- whole numbers and floating point values, but allows larger negative and positive numbers than thenumbertype.(n)

  // 5. symbol
  const id: symbol = Symbol("id"); // symbol- are used to create a globally unique identifier.

  // Special Types

  // any - disables type checking

  let data: any = 5;

  data = "hello";
  data = true;

  // Union Types - or (|)

  let value: string | number;

  value = "hello";
  value = 42;
  //value = true;  // ERROR!

  const [unionValue, setUnionValue] = useState<string | number>("TypeScript");

  function changeValue(newVal: string | number) {
    setUnionValue(newVal)
  }

  // Literal Types

  // Literal types allow you to specify an exact value a variable can have, instead of just a general type like string or number

  let direction: "left" | "right" | "up" | "down";

  direction = "up";
  direction = "right";
  // direction = "forward"; // Error

  // Arrays

  const numbers: number[] = [1, 2, 3];
  numbers.push(4);
  // numbers.push("5"); //  Error: can't add string to number array

  const fruits: string[] = ["apple", "banana", "cherry"];
  fruits.push("orange");
  // fruits.push(42);    // Error

  // Greneric Syntax for Arrays

  const numbers2: Array<number> = [10, 20, 30];

  // Array with Union Types

  const mixed: (string | number)[] = ["apple", 42, "banana", 100];
  mixed.push("cherry");
  mixed.push(999);
  // mixed.push(true);  // Error: boolean not allowed

  // OBJECT

  let person: { name: string; age: number };

  person = {
    name: "Alice",
    age: 30
  };

  // person.age = "30"; // Error: age must be a number
  /*   person = {
    name: "Alice",}
  */ // Error: Property 'age' is missing in type

  // Optional Properties(?:)

  let car: { brand: string; year?: number };

  car = { brand: "Toyota" };
  car = { brand: "Honda", year: 2020 };
  // car = { year: 2020 }; //  Error: brand is required

  // Using Type 

  type User = {
    name: string;
    age: number;
    isAdmin?: boolean;  // optional
  };

  const user1: User = {
    name: "Bob",
    age: 25,
  };

  const user2: User = {
    name: "Carol",
    age: 30,
    isAdmin: true,
  };

  // Using Interface
  interface Users {
    name: string;
    age: number;
    isAdmin?: boolean;
  }

  const user3: Users = {
    name: "David",
    age: 40,
  };


  return (
    <>
      <h2>Primitive Types in TypeScript</h2>
      <ul>
        <li>boolean: {isActive.toString()}</li>
        <li>number: {age}, {price}</li>
        <li>string: {message}</li>
        <li>bigint: {big.toString()}</li>
        <li>symbol: {id.toString()}</li>
      </ul>

      <h2>Special Types</h2>
      <ul>
        <li>{data.toString()}</li>
      </ul>

      <h2>Union Types</h2>
      <ul>
        <li>{value}</li>
        <li>
          <p>Current value: {unionValue}</p>
          <button onClick={() => changeValue(123)}>Set Number</button>
          <button onClick={() => changeValue("Hello")}>Set String</button>
        </li>
      </ul>

      <h2>Literal Types</h2>
      <ul>
        <li>{direction}</li>
      </ul>

      <h2>Arrays</h2>
      <ul>
        <li>{numbers}</li>
        <li>{fruits}</li>
        <li>{numbers2}</li>
        <li>{mixed}</li>
      </ul>

      <h2>Objects</h2>
      <ul>
        <li>{person.name}</li>
        <li>{car.brand}</li>

      </ul>
    </>
  );
}

export default App;

// TypeScript is JavaScript with added syntax for types.


