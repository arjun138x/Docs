# 1. `useEffect` & `useLayoutEffect` With differences and code example

## Overview

React provides two hooks for handling side effects in functional components: **useEffect** and **useLayoutEffect**. While they are similar, they differ in when they execute within the component lifecycle.

- **useLayoutEffect** executes **before** the browser repaints, ensuring that users do not see any intermediate state changes.
- **useEffect** executes **after** the browser has painted the UI, making it suitable for non-blocking operations.

---

## useEffect

### Key Points

- If no dependency array is provided, `useEffect` runs on **every render**.
  ```jsx
  useEffect(() => {
    console.log("useEffect called");
  });
  ```
- If an empty dependency array (`[]`) is provided, `useEffect` runs **only once** after the initial render.
  ```jsx
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  ```
- It is asynchronous and does **not** block rendering.
- Ideal for data fetching, subscriptions, and interacting with external APIs.

### Example

```jsx
import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Runs only when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## useLayoutEffect

### Key Points

- **Runs synchronously** after all DOM mutations but **before** the browser repaints.
- Ensures that DOM measurements or updates happen **before** the user sees changes.
- Similar to `componentDidMount` and `componentDidUpdate` in class components.

### Example

```jsx
import React, { useLayoutEffect, useState } from "react";

function Example() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Runs once after the initial render

  return <p>Window width: {width}</p>;
}
```

---

## Key Differences

| Feature       | useEffect                               | useLayoutEffect                       |
| ------------- | --------------------------------------- | ------------------------------------- |
| **Timing**    | After render is committed               | Before the browser paints             |
| **Blocking**  | Non-blocking                            | Blocks rendering until completed      |
| **Use Cases** | Data fetching, subscriptions, API calls | Layout calculations, DOM measurements |

### When to Use What?

- Use **useEffect** for most side effects, especially those that **don’t require immediate layout calculations**.
- Use **useLayoutEffect** when you need to **read from or modify the DOM** before the browser paints (e.g., animations, measuring elements).

By understanding these differences, you can optimize the performance and behavior of your React applications effectively!

### **Code Example with useEffect & useLayoutEffect**

```jsx
import React, { useEffect, useLayoutEffect, useState } from "react";

const Example = () => {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    console.log("useEffect: Color changed");
  }, [color]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Color changed");
  }, [color]);

  return (
    <div>
      <h1 style={{ color }}>Hello, World!</h1>
      <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>
        Toggle Color
      </button>
    </div>
  );
};

export default Example;
```

### **Execution Order**

When clicking the button:

1. **`useLayoutEffect` runs first** (before the browser repaints).
2. **`useEffect` runs afterward** (after the DOM update is painted).
