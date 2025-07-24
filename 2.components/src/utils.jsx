export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

function Calculator() {
  return <div>Calculator Component</div>;
}

export default Calculator;

// In React, a component must return only ONE parent element.
// If you want to return multiple elements side by side,
// you MUST wrap them in a single parent (like <div> or <> fragment </>

/*  
     <>
      <div>Login</div>
      <div>Login2</div>
    </> 
*/

// EXPORT
/*
		You can export multiple values from a file.
		You must import using curly braces {}.
		You must use the exact exported name unless you use as to rename.
    // import { add as plus } from './utils';
       console.log(plus(5, 3)); // 8
*/

// DEFOULT EXPORT
/*
		You can have only one default export per file.
		You do not use curly braces when importing.
		You can name it anything when importing.
*/
