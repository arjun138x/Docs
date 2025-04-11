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
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function Example() {
  const textRef = useRef();

  // change useLayoutEffect to useEffect to see the ui rendering difference.
  // text wil render two times before the useEffect execution and after useEffect execution.
  useLayoutEffect(() => {
    if (textRef.current !== null) {
      const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension);
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, []); // Runs once after the initial render

  return <h4 ref={textRef}>useLayoutEffect</h4>;
}

export default Example;
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

# 2. **`useRef`, `useMemo`, `useCallback` in React**

React provides several hooks to optimize state management, performance, and component rendering. Let's dive into some key hooks:

## 📌 Note:

- useMemo for memoization for result(heavy calculations).
- useCallback for memoization for function.
- useEffect, useMemo and useCallback is same. useEffect cant return anything and it cant assign to any variable

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
    inputRef.current.style.width = "300px"; // we can manipulate DOM with out rerendering the component
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
export default MyComponent;
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

### 📌 **Example: Mutable variable without causing re-rendering**

In this example, inputRef is used to store a count without causing re-renders

```jsx
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const refCount = useRef(0);

  useEffect(() => {
    refCount.current = refCount.current + 1;
  }); // dependency array is not passing. if the state changes this will execute
  return (
    <div>
      <input onChange={({ target }) => setName(target.value)} />
      <h2>Name: {name}</h2>
      <h4>Renders: {refCount.current}</h4>
    </div>
  );
};

export default App;
```

✅ **Best use cases**: DOM manipulation, storing mutable values without re-renders.

---

## **2️⃣ `useMemo` - Optimize Expensive Calculations**

**What is `useMemo`?**

- `useMemo` **memoizes the result of a computation** and only recalculates it when dependencies change.
- This helps in preventing unnecessary recalculations.

### 📌 **Example: Memoizing a Computed Value**

In this example, number is memoized using useMemo. It will only recompute when the number state changes.

```jsx
import React, { useMemo, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState();

  // syntax for useMemo and useState is same. useEffect cant return the value and cant assign to the variable
  // useMemo remembers the result of expensiveFunction(number) until number changes.
  const memoCalculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]); // Runs once after the initial render

  // Every time dark changes (theme toggle), expensiveFunction runs again—even though number hasn't changed.
  // const calculation = expensiveFunction(number);
  const cssStyes = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={cssStyes}>
      <input type="number" onClick={({ target }) => setNumber(target.value)} />
      {/* <h3>calculation:{calculation}</h3> */}
      <h3>calculation:{memoCalculation}</h3>
      <button onClick={() => setDark((prv) => !prv)}>theme</button>
    </div>
  );
}

function expensiveFunction(num) {
  console.log("for loop started");
  for (let index = 0; index < 200000000; index++) {}
  return num;
}

export default UseMemoExample;
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

In React, **controlled** and **uncontrolled components** refer to how form elements like `<input>`, `<textarea>`, and `<select>` manage their state.

---

### **Controlled Component**

In a controlled component, form data is handled by the **React component's state**. You manage the input using `useState` or class state and update it with an `onChange` handler.

- In short: React is in full control of the input element.

#### Example:

```jsx
import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>Controlled Component</h3>
      <input type="text" value={value} onChange={handleChange} />
      <p>Input: {value}</p>
    </div>
  );
}
```

**Key Points:**

- `value` is controlled by React state.
- React re-renders on every input change.

---

### **Uncontrolled Component**

In an uncontrolled component, the form data is handled by the **DOM** itself. You use **`ref`** to access the value when needed, not on every change.

- In short: The DOM handles the input's state, and React accesses it only when needed.

#### Example:

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h3>Uncontrolled Component</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Show Value</button>
    </div>
  );
}
```

**Key Points:**

- No `useState`.
- DOM maintains the value until you explicitly read it using `ref`.

---

### **Summary**

| Feature           | Controlled Component      | Uncontrolled Component |
| ----------------- | ------------------------- | ---------------------- |
| Value source      | React state               | DOM                    |
| Access method     | `useState` & `onChange`   | `ref`                  |
| Real-time control | Yes                       | No                     |
| Recommended for   | Dynamic validation, forms | Simple or legacy forms |

# **7. How to Get Child Component Changes in Parent Component in React?**

In React, child components **cannot directly modify** their parent's state. Instead, the parent must pass a function **as a prop** to the child, allowing the child to send data back to the parent.

---

## **✅ 1. Using Callback Function (Best for Simple Cases)**

**Parent passes a function to the child.**  
**Child calls this function to send data back to the parent.**

### **Example: Child Input Value Updates Parent State**

📌 **Parent Component (`App.js`)**

```jsx
import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState(""); // State in Parent

  // Function to update Parent state from Child
  const handleChildChange = (childData) => {
    setMessage(childData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      <Child onMessageChange={handleChildChange} />
    </div>
  );
}

export default App;
```

📌 **Child Component (`Child.js`)**

```jsx
import React, { useState } from "react";

function Child({ onMessageChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onMessageChange(e.target.value); // Send data to Parent
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Child;
```

### **📌 How It Works**

✔ The **Parent (`App.js`)** has a `handleChildChange` function to update its state.  
✔ The **Parent passes this function as a prop (`onMessageChange`)** to the **Child (`Child.js`)**.  
✔ The **Child calls `onMessageChange(e.target.value)`**, sending the input value to the Parent.

---

## **✅ 2. Using `useState` with `useEffect` (If Child Needs to Trigger Side Effects in Parent)**

**Useful when the Parent needs to react when the Child's state changes.**

📌 **Parent Component (`App.js`)**

```jsx
import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [childCount, setChildCount] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter from Child: {childCount}</p>
      <Child onCountChange={setChildCount} />
    </div>
  );
}

export default App;
```

📌 **Child Component (`Child.js`)**

```jsx
import React, { useState, useEffect } from "react";

function Child({ onCountChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChange(count); // Send count to Parent when updated
  }, [count]);

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Child;
```

### **📌 How It Works**

✔ Every time the **Child's `count` state changes**, `useEffect` sends the updated value to the Parent.

---

## **✅ 3. Using Context API (Best for Deeply Nested Components)**

**If the child is deep inside multiple components, passing functions as props (prop drilling) can be cumbersome.**  
**The Context API allows direct communication between the Parent and Child, no matter where they are in the component tree.**

📌 **Context Setup (`CounterContext.js`)**

```jsx
import React, { createContext, useState } from "react";

// Create Context
export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
```

📌 **Parent Component (`App.js`)**

```jsx
import React, { useContext } from "react";
import { CounterProvider, CounterContext } from "./CounterContext";
import Child from "./Child";

function Parent() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter from Child: {count}</p>
      <Child />
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <Parent />
    </CounterProvider>
  );
}
```

📌 **Child Component (`Child.js`)**

```jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Child() {
  const { setCount } = useContext(CounterContext);

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default Child;
```

### **📌 How It Works**

✔ `CounterContext` provides the `count` and `setCount` state to all child components.  
✔ The **Child updates** the counter using `setCount`, and the **Parent automatically updates** because it reads from the same Context.

✅ **No need to pass props manually through multiple components!**

---

## **✅ 4. Using Zustand for Global State Management**

If you want to share state between **Parent and Child without Context API**, you can use **Zustand**.

📌 **Install Zustand**

```sh
npm install zustand
```

📌 **Create Zustand Store (`store.js`)**

```js
import create from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCounterStore;
```

📌 **Parent Component (`App.js`)**

```jsx
import React from "react";
import useCounterStore from "./store";
import Child from "./Child";

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter from Child: {count}</p>
      <Child />
    </div>
  );
}

export default App;
```

📌 **Child Component (`Child.js`)**

```jsx
import React from "react";
import useCounterStore from "./store";

function Child() {
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Child;
```

### **📌 How It Works**

✔ `useCounterStore` holds the state globally.  
✔ The **Parent reads the state**, and the **Child updates it**.  
✔ The state **automatically updates across components** without prop drilling.

---

## **🚀 Summary: Best Approach for Different Use Cases**

| Approach                      | Best For                                            |
| ----------------------------- | --------------------------------------------------- |
| **Callback Function (Props)** | Simple one-level Parent-Child communication         |
| **useState + useEffect**      | When Parent needs to react to Child's state changes |
| **Context API**               | Deeply nested components needing shared state       |
| **Zustand**                   | Simple global state management without Context API  |

---

# **8. Context API vs. Redux Store: Key Differences & When to Use What?**

Both **Context API** and **Redux** are used for state management in React, but they serve different purposes. Let’s break it down.

---

## **1. What is Context API?**

📌 **Built-in React feature** for passing state deeply without prop drilling.  
📌 Works best for **lightweight** state management like themes, user authentication, etc.

✅ **When to Use Context API?**  
✔ Simple global state (e.g., Theme, User Auth, Language Settings).  
✔ When state updates don’t require complex logic.  
✔ Avoids unnecessary re-renders if used efficiently with `useMemo`.

📌 **Example: Using Context API for Theme State**

```jsx
import React, { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to Use Theme
export function useTheme() {
  return useContext(ThemeContext);
}

// App Component
export default function App() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}

// Child Component
function ChildComponent() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

---

## **2. What is Redux Store?**

📌 **External library** used for managing complex application state.  
📌 **Predictable state container** with a single immutable store.  
📌 Uses **actions, reducers, and middleware** for structured updates.

✅ **When to Use Redux?**  
✔ When managing **large, complex, and shared state** across multiple components.  
✔ **If you need features like:**

- Time-travel debugging.
- Middleware for async calls (e.g., API fetching).
- Performance optimization for large apps.

📌 **Example: Redux Store for Global Counter**

1️⃣ **Install Redux Toolkit**

```sh
npm install @reduxjs/toolkit react-redux
```

2️⃣ **Create Redux Store (`store.js`)**

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

3️⃣ **Wrap App with Redux Provider (`index.js`)**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

4️⃣ **Use Redux Store in Components (`Counter.js`)**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
```

---

## **3. Key Differences: Context API vs. Redux**

| Feature             | Context API                                       | Redux                                                     |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| **Purpose**         | Passing state between deeply nested components    | Managing large-scale app state                            |
| **Complexity**      | Simple                                            | More structured (actions, reducers, store)                |
| **Performance**     | Can cause unnecessary re-renders if not optimized | Optimized with selectors, middleware, and dev tools       |
| **Async Support**   | Not built-in (requires extra handling)            | Supports middleware like Redux Thunk/Saga for async calls |
| **Debugging Tools** | No built-in debugging tools                       | Redux DevTools for tracking state changes                 |
| **Best for**        | Theming, authentication, UI state                 | Global state, API state, real-time updates                |

---

## **4. When to Choose What?**

| Use Case                                | Context API               | Redux  |
| --------------------------------------- | ------------------------- | ------ |
| **Theme Switching**                     | ✅ Yes                    | ❌ No  |
| **User Authentication**                 | ✅ Yes                    | ❌ No  |
| **Managing API Data**                   | ❌ No                     | ✅ Yes |
| **State Shared Across Many Components** | ❌ No (causes re-renders) | ✅ Yes |
| **Time-Travel Debugging**               | ❌ No                     | ✅ Yes |
| **Optimized for Large Apps**            | ❌ No                     | ✅ Yes |

---

## **5. When to Use Both Together?**

Sometimes, you might **combine Redux and Context API**:  
✔ **Use Context API for UI state** (e.g., theme, user auth).  
✔ **Use Redux for app-wide data** (e.g., API responses, large shared state).

📌 **Example: Theme with Context API + Data Management with Redux**

- **Context API for Theme State**
- **Redux for API Data (e.g., Products, Users, Orders)**

---

## **🔥 Conclusion**

- **Use Context API** when you need to pass state **without unnecessary complexity**.
- **Use Redux** when handling **complex, shared state** with API calls and debugging needs.
- **For small to medium projects**, Context API is enough.
- **For large-scale apps**, Redux is more scalable.

Yes! **You can create multiple states using Redux** by defining multiple **slices** and combining them in the Redux store.

---

# **9. How to Manage Multiple States in Redux?**

📌 **Use Redux Toolkit (`createSlice`)** to create separate states for different features.  
📌 **Combine multiple slices** into a single store using `configureStore`.

---

### **✅ Example: Managing User & Counter States in Redux**

We will create **two slices**:  
1️⃣ **Counter Slice** → Manages a simple counter.  
2️⃣ **User Slice** → Manages user authentication state.

---

### **1️⃣ Install Redux Toolkit (If Not Installed)**

```sh
npm install @reduxjs/toolkit react-redux
```

---

### **2️⃣ Create `counterSlice.js` (For Counter State)**

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### **3️⃣ Create `userSlice.js` (For User Authentication State)**

```js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      state.name = action.payload; // Set username
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.name = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
```

---

### **4️⃣ Create `store.js` (Combine Multiple States)**

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Manages counter state
    user: userReducer, // Manages user authentication state
  },
});
```

---

### **5️⃣ Wrap App with Redux Provider (`index.js`)**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

### **6️⃣ Use Multiple States in Components**

📌 **Component 1: Counter Component (`Counter.js`)**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

📌 **Component 2: User Authentication Component (`User.js`)**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./userSlice";

function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Authentication</h2>
      {user.isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch(login("John Doe"))}>Login</button>
        </>
      )}
    </div>
  );
}

export default User;
```

---

### **7️⃣ Use Both Components in `App.js`**

```jsx
import React from "react";
import Counter from "./Counter";
import User from "./User";

function App() {
  return (
    <div>
      <h1>Redux Multiple State Example</h1>
      <Counter />
      <User />
    </div>
  );
}

export default App;
```

---

## **🎯 Summary: Managing Multiple States in Redux**

| Feature             | Context API                         | Redux                            |
| ------------------- | ----------------------------------- | -------------------------------- |
| **Multiple States** | ❌ Not ideal for complex cases      | ✅ Easy with multiple slices     |
| **Performance**     | ❌ Can cause unnecessary re-renders | ✅ Optimized with Redux DevTools |
| **Scalability**     | ❌ Hard to manage in large apps     | ✅ Best for large applications   |
| **Best for**        | UI state, themes, simple auth       | API data, complex global state   |

✅ **Yes! You can manage multiple states using Redux** by creating multiple slices and combining them in `configureStore`. 🚀

---

Great question! Let's break it down and show you **how to use `redux-thunk` in a React app** step-by-step.

---

# **10. 🧠 What is `redux-thunk`?**

`redux-thunk` is a **middleware** that lets you write **async logic (like API calls)** inside your Redux actions.  
Normally, Redux actions are just plain objects. With thunk, they can return **functions** that dispatch actions after async tasks (like fetching data).

---

## 🔧 Step-by-Step Setup

### 1️⃣ Install Dependencies

```bash
npm install redux react-redux redux-thunk
```

---

### 2️⃣ Create Redux Store with Thunk

```js
// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // combineReducers output

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

---

### 3️⃣ Wrap App with Provider

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

### 4️⃣ Write a Thunk Action (Async Fetch Example)

```js
// actions/userActions.js
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: err.message });
    }
  };
};
```

---

### 5️⃣ Create Reducer

```js
// reducers/userReducer.js
const initialState = {
  loading: false,
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
```

---

### 6️⃣ Combine Reducers

```js
// reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
});
```

---

### 7️⃣ Use in Component

```js
// components/UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";

function UserList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

---

## ✅ Summary

| Part            | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `redux-thunk`   | Middleware to write async logic in Redux actions |
| `dispatch()`    | Triggers actions from inside components          |
| `useSelector()` | Access Redux state                               |
| `useDispatch()` | Send actions (including thunks)                  |

---

# **11. What is a Pure Component**

In React, **Pure Components** are components that implement `shouldComponentUpdate()` with a shallow comparison of props and state. This helps prevent unnecessary re-renders and improves performance.

### Key Points:

- **Extends `React.PureComponent`** instead of `React.Component`
- **Automatically implements `shouldComponentUpdate()`** using a shallow prop and state comparison
- **Useful for optimizing functional and class components** by preventing redundant renders

---

### Example: Using a Pure Component

```jsx
import React, { PureComponent, useState } from "react";

class Counter extends PureComponent {
  render() {
    console.log("Counter component re-rendered");
    return <h2>Count: {this.props.count}</h2>;
  }
}

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
};

export default App;
```

---

### Explanation:

1. `Counter` extends `PureComponent`, so it only re-renders if `count` changes.
2. If `otherState` changes, `Counter` **does not** re-render unnecessarily.
3. This improves performance in large applications.

### Pure Component with React.memo and Objects

```jsx
const ProfileCard = React.memo(
  ({ user }) => {
    console.log("ProfileCard component re-rendered");
    return (
      <div>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.user.name === nextProps.user.name
);

export default ProfileCard;
```

✅ Uses custom comparison to avoid unnecessary re-renders
Great! Let's break it down.

---

# **12. 🪝 What is a **Custom Hook** in React?**

A **custom hook** is just a **JavaScript function** that:

- Starts with the word `use` (like `useFetch`, `useAuth`, etc.)
- Can use other React hooks (`useState`, `useEffect`, etc.)
- Helps **re-use logic** across multiple components.

### ✅ Why use it?

- Keep components clean.
- Avoid duplicating logic (like fetching data, handling forms, etc.)

---

## 🔧 Example: `useFetch` Custom Hook

Here’s a simple custom hook that fetches data from an API.

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // optional: to avoid setting state on unmounted component

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

---

## 📦 How to Use `useFetch` in a Component:

```js
import React from "react";
import useFetch from "./useFetch";

function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

---
