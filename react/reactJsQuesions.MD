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

**What is `useRef`?**

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

**What is `useMemo`?**

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

**What is `useCallback`?**

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

### **Expected Behavior**

| Action                  | What Happens?                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Clicking "Increment"    | The `count` updates, `ParentComponent` re-renders, but `ChildComponent` **does not re-render unnecessarily**.                              |
| Clicking "Toggle Theme" | The theme changes, `ParentComponent` re-renders, but `ChildComponent` **does not re-render** since `onIncrement` reference remains stable. |

✅ **Best use cases**: Passing stable function references to child components, optimizing event handlers.

---

## **4️⃣ `useReducer` - Manage Complex State Logic**

**What is `useReducer`?**

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

## **Summary: When to Use What?**

| Hook          | Purpose                                  | Best Use Cases                                    |
| ------------- | ---------------------------------------- | ------------------------------------------------- |
| `useRef`      | Stores mutable values without re-renders | Accessing DOM elements, tracking previous values  |
| `useMemo`     | Memoizes computed values                 | Expensive calculations, filtering large datasets  |
| `useCallback` | Memoizes functions                       | Preventing unnecessary function recreation        |
| `useReducer`  | Manages complex state logic              | Forms, state transitions, complex component state |

# 3. **🆚 `useState` vs `useReducer` in React**

React provides two powerful hooks for managing state: `useState` and `useReducer`. While both serve the same purpose, they are designed for different use cases. Let's dive deeper into their differences.

---

## **📌 Key Differences Between `useState` and `useReducer`**

| Feature                       | `useState` 🟢                                        | `useReducer` 🔴                                           |
| ----------------------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| **Best For**                  | Simple state management (booleans, numbers, strings) | Complex state logic with multiple sub-values              |
| **State Updates**             | Directly set the new state value                     | Uses a reducer function to determine the next state       |
| **Handling Multiple States**  | Requires multiple `useState` calls                   | Can handle multiple state changes in a single reducer     |
| **Readability & Maintenance** | Simple and concise for basic state                   | More structured and scalable for complex logic            |
| **Performance**               | Similar to `useReducer` for simple state             | Preferred for optimizing performance in complex scenarios |
| **Use Case Examples**         | Form inputs, toggles, counters                       | Todo lists, authentication state, API data management     |

---

## **📌 When to Use Which?**

### ✅ **Use `useState` when:**

- You are managing **simple** and **independent** state variables.
- The state updates are **straightforward** and do not depend on previous values.
- Example: A toggle button (`true` / `false`), counter, or form input.

### ✅ **Use `useReducer` when:**

- Your state **transitions** are **complex** or interdependent.
- You need to **manage state changes** using a **single function** (reducer).
- Your state consists of **multiple sub-values** (e.g., object, array).
- You want to **avoid prop drilling** by passing the reducer's `dispatch` function to child components.

---

## **📌 Code Examples for `useState` vs `useReducer`**

### **1️⃣ `useState` Example (Simple Counter)**

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
```

**Why use `useState` here?**

- The state is simple (just a number).
- Each update is **independent** and does not require complex logic.

---

### **2️⃣ `useReducer` Example (Todo List)**

```jsx
import React, { useReducer, useState } from "react";

const initialTodos = [
  { id: 1, description: "Learn React" },
  { id: 2, description: "Practice Coding" },
];

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: state.length + 1, description: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.description}</span>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
```

**Why use `useReducer` here?**

- The state has multiple objects (`id`, `description`).
- Different **actions** (`ADD_TODO`, `REMOVE_TODO`) need to be handled.
- Centralized logic in the **reducer function** makes it easy to modify and scale.

---

## **🎯 Conclusion**

- **Use `useState`** when managing **simple, independent state values**.
- **Use `useReducer`** when dealing with **complex state logic** that requires structured updates.

🚀 If you're building a **small component** with a simple state, **go with `useState`**.  
💡 If your state management involves **multiple related states or complex updates**, **use `useReducer`**.

# 4. Create a React Counter: Increment 0 to 5, Reset to 0, and Stop

```jsx
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prv) => {
        if (prv < 5) {
          return prv + 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
      if (count === 5) {
        console.log({ count });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h1>Count: {count}</h1>;
};

export default Counter;
```

---

# 5. **Why does const allow state changes in React's useState?**

```javascript
function useState(initialState) {
  // 'currentState' is a closure variable, persisting across renders.
  let currentState = initialState;

  function setState(newState) {
    if (typeof newState === "function") {
      currentState = newState(currentState); // Allow functional updates
    } else {
      currentState = newState;
    }

    // This is where the magic of re-rendering happens.
    // In a real React implementation, this would trigger a reconciliation process.
    // For this simplified example, we'll just log the new state.
    console.log("State updated:", currentState);

    // In a real react application this function would trigger a re-render of the component.
    // This example does not have the react engine to trigger a re-render.
  }

  return [currentState, setState];
}

// Example usage (simulating a React component):

function MyComponent() {
  const [count, setCount] = useState(0); // Initialize state

  function increment() {
    setCount(count + 1); // Update state
  }

  function functionalIncrement() {
    setCount((prevCount) => prevCount + 1); //functional update
  }

  console.log("Component rendered. Count:", count);

  return { count, increment, functionalIncrement }; // Return values for testing
}

const componentInstance = MyComponent();
componentInstance.increment();
componentInstance.functionalIncrement();
```

### **Explanation and Important Notes:**

1. **Closure:**
   - The `currentState` variable is held in a closure. This means it persists between calls to `setState`. This is how React remembers the state between renders.
2. **`setState` Function:**
   - The `setState` function is responsible for updating the state.
   - It accepts either a new state value directly or a function that takes the previous state as an argument and returns the new state (functional updates). Functional updates are crucial for avoiding stale closures and race conditions when dealing with asynchronous updates.
3. **Re-rendering (Simplified):**
   - In a real React application, `setState` would trigger a complex reconciliation process that compares the virtual DOM before and after the state change and updates the actual DOM efficiently.
   - In this simplified example, I've just added `console.log` to simulate the state update.
   - The key part that is missing from this example is the actual triggering of the component function to run again, which is the re-render.
4. **No React Engine:**
   - This code snippet is a simplified illustration. It doesn't include the React engine, virtual DOM, or reconciliation logic.
   - It demonstrates the core concept of how `useState` manages state using closures.
5. **Functional Updates:**
   - Functional updates, like `setCount(prevCount => prevCount + 1)`, are the preferred way to update state when the new state depends on the previous state. This ensures that you're working with the most up-to-date state value.

This example provides a basic understanding of the inner workings of `useState`. Remember that the actual React implementation is much more complex and optimized for performance.

# **6. Controlled vs. Uncontrolled Components in React**

In **React**, there are two types of form components based on how their values are managed:

1️⃣ **Controlled Components** → State is managed by React (via `useState`).  
2️⃣ **Uncontrolled Components** → State is managed by the DOM (via `useRef`).

---

## **1. Controlled Component**

✅ React **controls** the input value using `useState`.  
✅ Every change in the input field updates the state.

### **Example: Controlled Input with `useState`**

```jsx
import React, { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState(""); // React manages state

  return (
    <div>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={name} // Value comes from state
        onChange={(e) => setName(e.target.value)} // Updates state on change
      />
      <p>Typed Name: {name}</p>
    </div>
  );
}

export default ControlledInput;
```

### **📌 How It Works**

- `useState` holds the value of the input field.
- When the user types, `onChange` updates the state.
- The input field **always reflects the state value**.

✅ **Advantages:**  
✔ Easier to track input changes.  
✔ Useful for validation, transformations, or controlling inputs dynamically.  
✔ Recommended in modern React apps.

---

## **2. Uncontrolled Component**

✅ React **does NOT** control the input value.  
✅ The value is directly **managed by the DOM** using `useRef`.

### **Example: Uncontrolled Input with `useRef`**

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const nameRef = useRef(null); // Reference to DOM element

  const handleSubmit = () => {
    alert(`Entered Name: ${nameRef.current.value}`); // Accessing value directly from DOM
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <input type="text" ref={nameRef} /> {/* No state management */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UncontrolledInput;
```

### **📌 How It Works**

- `useRef` is used to access the input field directly.
- The value is **not stored in React state**.
- When submitting, `nameRef.current.value` fetches the input value from the DOM.

✅ **Advantages:**  
✔ Useful for accessing values **without re-rendering**.  
✔ Works well with third-party libraries that require direct DOM manipulation.

---

## **Key Differences: Controlled vs. Uncontrolled**

| Feature              | Controlled Component                  | Uncontrolled Component                              |
| -------------------- | ------------------------------------- | --------------------------------------------------- |
| **State Management** | Managed by React (`useState`)         | Managed by the DOM (`useRef`)                       |
| **Reactivity**       | Updates with state changes            | Does not trigger re-renders                         |
| **Value Access**     | From React state                      | From DOM (`ref.current.value`)                      |
| **Use Case**         | Forms, validation, input restrictions | Interacting with third-party libraries, file inputs |

---

## **When to Use What?**

| Use Case                                         | Recommended Approach |
| ------------------------------------------------ | -------------------- |
| Need validation, transformation, or live updates | **Controlled**       |
| Need minimal re-renders for performance          | **Uncontrolled**     |
| Working with legacy or third-party libraries     | **Uncontrolled**     |

---

## **🔥 Example: Combining Both**

Sometimes, you may need both approaches together.

```jsx
import React, { useState, useRef } from "react";

function HybridComponent() {
  const [email, setEmail] = useState(""); // Controlled
  const fileRef = useRef(null); // Uncontrolled

  const handleSubmit = () => {
    alert(`Email: ${email}\nFile: ${fileRef.current.files[0]?.name}`);
  };

  return (
    <div>
      <h2>Hybrid Component</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="file" ref={fileRef} />{" "}
      {/* File inputs are usually uncontrolled */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HybridComponent;
```

✅ Controlled for text input  
✅ Uncontrolled for file input (as file inputs don’t work well with `useState`)

---

## **🚀 Summary**

| Type             | Uses `useState`? | Uses `useRef`? | Best For                                              |
| ---------------- | ---------------- | -------------- | ----------------------------------------------------- |
| **Controlled**   | ✅ Yes           | ❌ No          | Forms, validation, dynamic updates                    |
| **Uncontrolled** | ❌ No            | ✅ Yes         | Direct DOM access, file inputs, third-party libraries |
