import React, { useState } from "react";

const FileExplorer = () => {
  const [structure, setStructure] = useState([
    {
      id: 1,
      name: "frontend",
      isFolder: true,
      children: [
        {
          name: "src",
          isFolder: true,
          id: 2,
          children: [{ name: "index.js", isFolder: false, id: 30 }],
        },
        { name: "index.js", isFolder: false, id: 3 },
      ],
    },
    { name: "backend", isFolder: true, children: [], id: 4 },
  ]);

  const onRemove = (id) => {
    function support(arr, id) {
      return arr
        .filter((obj) => obj.id !== id)
        .map((child) => ({
          ...child,
          children: child.children ? support(child.children, id) : [],
        }));
    }

    setStructure((prv) => support(prv, id));
  };

  const onAdd = (id, type) => {
    const name = prompt(`Enter the ${type} name`);
    if (!name) return;
    const isFolder = type === "folder" ? true : false;

    function support(arr, id) {
      const data = arr.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            children: [
              ...obj.children,
              { name, isFolder, id: new Date().toString(), children: [] },
            ],
          };
        }

        return {
          ...obj,
          children: obj.children ? support(obj.children, id) : [],
        };
      });
      return data;
    }

    setStructure((prev) => support(prev, id));
  };

  return (
    <div>
      {console.log(structure)}
      {structure.map((obj) => (
        <ul>
          <CreateStructure onRemove={onRemove} onAdd={onAdd} data={obj} />
        </ul>
      ))}
    </div>
  );
};

const CreateStructure = ({ data, onRemove, onAdd }) => {
  const { id, isFolder, name, children } = data;
  return (
    <li key={id}>
      {name}
      {isFolder && (
        <>
          <button onClick={() => onAdd(id, "file")}>file+</button>{" "}
          <button onClick={() => onAdd(id, "folder")}>folder+</button>
        </>
      )}
      <button onClick={() => onRemove(id)}>remove</button>
      {children?.length > 0 && (
        <ul>
          {children.map((child) => {
            return (
              <CreateStructure
                onRemove={onRemove}
                onAdd={onAdd}
                key={child.id}
                data={child}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default FileExplorer;
