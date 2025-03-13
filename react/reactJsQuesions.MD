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

# 2. **`useRef`, `useMemo`, `useCallback` and `useReducer` in React**

React provides several hooks to optimize state management, performance, and component rendering. Let's dive into some key hooks:

---

## **1️⃣ `useRef` - Persist Values Without Re-rendering**

🔹 **What is `useRef`?**

- `useRef` **stores a mutable value** that persists across renders **without causing re-renders**.
- It’s commonly used for:  
  ✅ Accessing/manipulating DOM elements.  
  ✅ Persisting values across renders without re-triggering renders.

### 📌 **Example: Accessing a DOM Element**

In this example, inputRef is used to store a reference to the input element, allowing the focusInput function to focus on the input element when the button is clicked without causing re-renders.

```jsx
import React, { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

### 📌 **Example: Focus Input Field**

To focus on the username input when the component mounts we can use useRef.

```jsx
import React, { useEffect, useRef } from "react";

function LoginPage() {
  const usernameInputRef = useRef(null);

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameInputRef}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
```

✅ **Best use cases**: DOM manipulation, storing mutable values without re-renders.

---

## **2️⃣ `useMemo` - Optimize Expensive Calculations**

🔹 **What is `useMemo`?**

- `useMemo` **memoizes the result of a computation** and only recalculates it when dependencies change.
- This helps in preventing unnecessary recalculations.

### 📌 **Example: Memoizing a Computed Value**

In this example, squaredCount is memoized using useMemo. It will only recompute when the count state changes.

```jsx
import React, { useMemo, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const squaredCount = useMemo(() => {
    console.log("Calculating squared count...");
    return count ** 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

✅ **Best use cases**: Optimizing expensive computations, filtering/sorting large datasets.

---

## **3️⃣ `useCallback` - Memoize Functions for Optimization**

🔹 **What is `useCallback`?**

- `useCallback` **memoizes a function** so that it does not get recreated on every render.
- Useful when passing **functions as props** to child components to prevent unnecessary re-renders.
- It helps in **performance optimization** by ensuring that a function retains its reference unless dependencies change.

---

### **Example: Preventing Unnecessary Re-renders in Child Components**

In this example, we'll create a **parent component** that renders a **child component**.

- The child component receives a function as a prop.
- Without `useCallback`, the function would be **recreated** on every render, causing unnecessary re-renders of the child.
- By using `useCallback`, we ensure that the function reference remains **stable**, preventing unnecessary re-renders.

---

### **Code Example**

```jsx
import React, { useState, useCallback } from "react";

// Child component
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Child Component Rendered!");
  return <button onClick={onIncrement}>Increment</button>;
});

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Memoizing the function using useCallback
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so the function reference remains the same

  // ChildComponent will called on each button click(Increment/Toggle Theme). if we dint use the useCallback.
  // const handleIncrement = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h2>Count: {count}</h2>
      <ChildComponent onIncrement={handleIncrement} />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ParentComponent;
```

---

### **🧐 Explanation**

1️⃣ **Without `useCallback`:**

- Every time `ParentComponent` re-renders (e.g., when toggling the theme), `handleIncrement` is recreated.
- Since the function reference changes, `ChildComponent` also re-renders unnecessarily.

2️⃣ **With `useCallback`:**

- `handleIncrement` is **memoized**, meaning it keeps the **same reference** between renders.
- The `ChildComponent` **does not re-render** unless `handleIncrement` changes, improving performance.

3️⃣ **`React.memo` Optimization:**

- `React.memo` **memoizes the child component** to prevent unnecessary re-renders unless its props change.
- Since `handleIncrement` reference remains **stable**, the `ChildComponent` won’t re-render when the theme changes.

---

### **🔹 Expected Behavior**

| Action                  | What Happens?                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Clicking "Increment"    | The `count` updates, `ParentComponent` re-renders, but `ChildComponent` **does not re-render unnecessarily**.                              |
| Clicking "Toggle Theme" | The theme changes, `ParentComponent` re-renders, but `ChildComponent` **does not re-render** since `onIncrement` reference remains stable. |

✅ **Best use cases**: Passing stable function references to child components, optimizing event handlers.

---

## **4️⃣ `useReducer` - Manage Complex State Logic**

🔹 **What is `useReducer`?**

- `useReducer` is an **alternative to `useState`** when dealing with **complex state logic**.
- It is useful when state transitions depend on the **previous state** or involve **multiple related values**.
- It follows the **Redux-like pattern** with a `reducer` function handling **state updates** based on dispatched actions.

---

## **📌 Example: A Simple Counter with `useReducer`**

We'll create a **counter app** where we can **increment, decrement, and reset** the count.  
Instead of `useState`, we'll use `useReducer` for better state management.

---

### **🚀 Code Example**

```jsx
import React, { useReducer } from "react";

// 1️⃣ Reducer function: Determines how the state changes based on action type
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

// 2️⃣ Component using useReducer
const Counter = () => {
  // 3️⃣ Initializing useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {state.count}</h2>
      {/* Dispatching actions to update state */}
      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
};

export default Counter;
```

---

### **🧐 Explanation**

1️⃣ **Reducer Function (`reducer`)**

- Defines how state updates based on **action types**.
- **Accepts**: `(state, action)`
- **Returns**: The **new state** based on the action.

2️⃣ **Initializing `useReducer`**

- `const [state, dispatch] = useReducer(reducer, { count: 0 });`
- `state`: Current state (`{ count: 0 }` initially).
- `dispatch`: Function to **send actions** to the reducer.

3️⃣ **Dispatching Actions**

- `dispatch({ type: "increment" })` → Calls `reducer`, updating state.
- `dispatch({ type: "decrement" })` → Decreases `count`.
- `dispatch({ type: "reset" })` → Resets `count` to `0`.

---

### **🚀 Why Use `useReducer` Instead of `useState`?**

✅ **Better for complex state logic** (especially when the next state depends on the previous one).  
✅ **Keeps state transitions predictable** using a reducer function.  
✅ **Useful for state updates triggered by multiple actions**.

---

### **📌 When to Use `useReducer`?**

| Situation                                         | `useState` ✅             | `useReducer` ✅                     |
| ------------------------------------------------- | ------------------------- | ----------------------------------- |
| Simple state updates (toggle, counter)            | ✅ Best Choice            | 🚫 Overkill                         |
| Complex state logic with multiple actions         | 🚫 Hard to manage         | ✅ Ideal                            |
| When the next state depends on the previous state | 🚫 Less efficient         | ✅ Recommended                      |
| Managing state across deeply nested components    | 🚫 Requires prop drilling | ✅ Can be combined with Context API |

---

### **🎯 Real-World Use Cases for `useReducer`**

✔️ **Form validation** (handling multiple fields, errors, and submission state).  
✔️ **Todo lists** (adding, removing, updating items).  
✔️ **Fetching and managing API data** (handling loading, success, and error states).

---

## **🔹 Summary: When to Use What?**

| Hook          | Purpose                                  | Best Use Cases                                    |
| ------------- | ---------------------------------------- | ------------------------------------------------- |
| `useRef`      | Stores mutable values without re-renders | Accessing DOM elements, tracking previous values  |
| `useMemo`     | Memoizes computed values                 | Expensive calculations, filtering large datasets  |
| `useCallback` | Memoizes functions                       | Preventing unnecessary function recreation        |
| `useReducer`  | Manages complex state logic              | Forms, state transitions, complex component state |
