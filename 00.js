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
