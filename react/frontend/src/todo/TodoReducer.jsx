import React, { useReducer, useState } from "react";

const testData = [
  { id: 1, description: "text 4" },
  { id: 2, description: "text 5" },
  { id: 3, description: "text 6" },
];

// 1️⃣ Reducer function to manage state updates
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

const Todo = () => {
  // 2️⃣ Using useReducer instead of useState
  const [todo, dispatch] = useReducer(todoReducer, testData);
  const [text, setText] = useState("");

  // 3️⃣ Dispatching actions instead of directly updating state
  const onSubmit = () => {
    if (text.trim() === "") return; // Prevent adding empty todos
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  const onRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="flex flex-col items-center p-2 bg-red-200 min-h-screen">
      {/* Input Section */}
      <div>
        <input
          type="text"
          value={text}
          className="rounded-md p-2 me-2"
          onChange={({ target }) => setText(target.value)}
        />
        <button
          className="text-xl font-bold bg-blue-500 p-2 rounded-lg hover:bg-blue-700 text-white"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      {todo.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center m-1 w-9/12 border-2 p-2"
        >
          <p> {todo.description}</p>
          <button
            className="h-10 ms-1 text-xl font-bold bg-red-500 p-1 rounded-lg hover:bg-red-700 text-white"
            onClick={() => onRemove(todo.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
