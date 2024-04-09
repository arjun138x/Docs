import React, { useState } from "react";
const testData = [
  { id: 1, description: "text 1" },
  { id: 2, description: "text 2" },
  { id: 3, description: "text 3" },
];

const Todo = () => {
  const [todo, setTodo] = useState([...testData]);
  const [text, setText] = useState("");

  function onSubmit() {
    setTodo([...todo, { id: todo.length, description: text }]);
    setText("");
  }

  function onRemove(id) {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  }

  return (
    <div className="flex flex-col items-center p-2 bg-red-200 min-h-screen">
      <div>
        <input
          type="text"
          value={text}
          className="rounded-md p-2 me-2"
          onChange={({ target }) => setText(target.value)}
        />
        <button
          className=" text-xl font-bold bg-blue-500 p-2 rounded-lg hover:bg-blue-700 text-white"
          onClick={() => onSubmit()}
        >
          add
        </button>
      </div>

      {todo.map((todo) => (
        <div
          className="flex justify-between items-center m-1 w-9/12 border-2 p-2 "
          id={todo.id}
        >
          <p className=""> {todo.description}</p>
          <button
            className="h-10 ms-1 text-xl font-bold bg-red-500 p-1 rounded-lg hover:bg-red-700 text-white"
            onClick={() => onRemove(todo.id)}
          >
            add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
