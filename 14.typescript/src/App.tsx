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

  // ARRAYS

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

  // FUNCTION

  // Basic Function

  function greet(name: string): string {
    return `Hello, ${name}`
  }

  // Arrow Function
  const greetArrow = (name: string): string => {
    return `Hello, ${name}`
  }

  // Function Without Return Value (void)

  const write = (arr: string[]): void => {
    arr.forEach((value: string) => {
      return console.log(value)
    })
  }

  write(["apple", "banana", "orange"]);

  // GENERIC TYPE

  /*
      Define functions, classes, or types without fixing the type upfront.
      Specify the type when you use it.
      Keep your code flexible and type-safe at the same time.
  */

  function writes<T>(arr: T[]): void {
    console.log(arr)
  }

  writes([1, 2, 3])
  writes(["a", "b", "c"])
  writes([true, false])

  interface GenericType<T> {
    name: string,
    age: number,
    salary: T[]
  }

  const obj1: GenericType<string> = {
    name: "John",
    age: 24,
    salary: ["5000", "10000"]
  }

  const obj2: GenericType<number> = {
    name: "Alice",
    age: 30,
    salary: [3000, 8000]
  }

  const arr: GenericType<string | number>[] = [obj1, obj2]

  function writing<T>(arr: GenericType<T>[]): void {
    arr.forEach((value: GenericType<T>) => console.log(value))
  }

  writing(arr)

  // EXTENDS

  interface Person {
    name: string
    age: number
  }

  interface Employee extends Person {
    jobTitle: string
  }

  const worker: Employee = {
    name: "Ayşe",
    age: 28,
    jobTitle: "Nurse"
  }

  // Partial, Required, Readonly, Pick, Omit

  // Partial -> Makes all properties optional

  interface MyUser {
    name: string
    age: number
    isAdmin?: boolean // optional property
  }

  // 1. Partial - all properties become optional
  const partialUser: Partial<MyUser> = {
    name: "Alice"
    // age and isAdmin are optional here
  }

  // 2. Required - all properties must be present, even optional ones
  const requiredUser: Required<MyUser> = {
    name: "Bob",
    age: 30,
    isAdmin: true // now required because of Required<>
  }

  // 3. Readonly - cannot change values after creation
  const readonlyUser: Readonly<MyUser> = {
    name: "Charlie",
    age: 22,
    isAdmin: false
  }
  // readonlyUser.age = 23 // Error: read-only property

  // 4. Pick - only certain properties allowed
  const pickedUser: Pick<MyUser, "name" | "age"> = {
    name: "Diana",
    age: 28
    // isAdmin not allowed here
  }

  // 5. Omit - remove certain properties
  const omittedUser: Omit<MyUser, "isAdmin"> = {
    name: "Eve",
    age: 40
    // isAdmin removed from the type
  }

  console.log("Partial:", partialUser)
  console.log("Required:", requiredUser)
  console.log("Readonly:", readonlyUser)
  console.log("Pick:", pickedUser)
  console.log("Omit:", omittedUser)



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

      <h2>Function</h2>
      <ul>
        <li>{greet("John")}</li>
        <li>{greetArrow("John")}</li>
      </ul >

      <h2>Extends</h2>
      <ul>
        <li>{worker.name}</li>
        <li>{worker.age}</li>
        <li>{worker.jobTitle}</li>
      </ul>
    </>
  );
}

export default App;

// TypeScript is JavaScript with added syntax for types.


