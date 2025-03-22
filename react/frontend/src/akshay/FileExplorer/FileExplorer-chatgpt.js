import React, { useState } from "react";

const FileExplorer = () => {
  const [structure, setStructure] = useState([]);

  // Function to add a new folder or file
  const addItem = (parentPath, type) => {
    const name = prompt(`Enter ${type} name:`);
    if (!name) return;
    setStructure((prev) =>
      addToStructure(prev, parentPath, {
        name,
        type,
        children: type === "folder" ? [] : undefined,
      })
    );
  };

  // Function to remove a folder or file
  const removeItem = (path) => {
    setStructure((prev) => removeFromStructure(prev, path));
  };

  return (
    <div>
      <h2>File Explorer</h2>
      {/* Button to add a root-level folder */}
      <button onClick={() => addItem([], "folder")}>Add Root Folder</button>
      <FileTree
        data={structure}
        addItem={addItem}
        removeItem={removeItem}
        path={[]}
      />
    </div>
  );
};

const FileTree = ({ data, addItem, removeItem, path }) => {
  return (
    <ul>
      {data.map((item, index) => {
        const itemPath = [...path, index];
        return (
          <li key={index}>
            {item.type === "folder" ? "📁" : "📄"} {item.name}
            {/* Show add buttons only for folders */}
            {item.type === "folder" && (
              <>
                <button onClick={() => addItem(itemPath, "folder")}>
                  + Folder
                </button>
                <button onClick={() => addItem(itemPath, "file")}>
                  + File
                </button>
              </>
            )}
            {/* Delete button for both files and folders */}
            <button onClick={() => removeItem(itemPath)}>❌</button>
            {/* Recursively render child folders */}
            {item.type === "folder" &&
              item.children &&
              item.children.length > 0 && (
                <FileTree
                  data={item.children}
                  addItem={addItem}
                  removeItem={removeItem}
                  path={itemPath}
                />
              )}
          </li>
        );
      })}
    </ul>
  );
};

// Function to add an item (folder or file) to the structure at the given path
const addToStructure = (arr, path, newItem) => {
  if (path.length === 0) return [...arr, newItem];
  const [index, ...rest] = path;
  return arr.map((item, i) =>
    i === index
      ? {
          ...item,
          children: item.children
            ? addToStructure(item.children, rest, newItem)
            : item.children,
        }
      : item
  );
};

// Function to remove an item (folder or file) from the structure at the given path
const removeFromStructure = (arr, path) => {
  if (path.length === 1) return arr.filter((_, i) => i !== path[0]);
  const [index, ...rest] = path;
  return arr.map((item, i) =>
    i === index
      ? { ...item, children: removeFromStructure(item.children, rest) }
      : item
  );
};

export default FileExplorer;
