import React from "react";

function Container({ children }) {
  return (
    <div>
      <div>The Container component worked</div>
      {children}
    </div>
  );
}

export default Container;

// This is a Container component that wraps children components.
// It helps to group Product components inside it for layout purposes.
// Use <Container> ... </Container> to wrap multiple components inside.
