import { useState } from "react";
import("./index.css");

const allColumns = [
  { id: 1, title: "Fname" },
  { id: 2, title: "Lname" },
  { id: 3, title: "age" },
  { id: 4, title: "gender" },
  { id: 5, title: "city" },
  { id: 6, title: "country" },
];

const left = "<";
const right = ">";

const ColumnSelector = () => {
  const [leftCol, setLeftCol] = useState(allColumns);
  const [rightCol, setRightCol] = useState([]);
  const [selectedCol, setSelectedCol] = useState({
    left: new Set(),
    right: new Set(),
  });

  const toggleSelect = (id, direction) => {
    console.log({ id });
    if (selectedCol[direction].has(id)) {
      selectedCol[direction].delete(id);
    } else {
      selectedCol[direction].add(id);
    }

    setSelectedCol({ ...selectedCol });
  };

  const moveRight = () => {
    const moveVal = [];
    const filterCol = leftCol.filter((o) => {
      if (selectedCol.left.has(o.id)) {
        moveVal.push(o);
        return false;
      } else return true;
    });
    setLeftCol([...filterCol]); // remove the selected columns
    setRightCol((prv) => [...prv, ...moveVal]); // add the new columns
    setSelectedCol((prv) => ({ ...prv, left: new Set() })); // clear the selected columns
  };

  const moveLeft = () => {
    const moveVal = [];
    const filterCol = rightCol.filter((o) => {
      if (selectedCol.right.has(o.id)) {
        moveVal.push(o);
        return false;
      } else return true;
    });
    setRightCol([...filterCol]);
    setLeftCol((prv) => [...prv, ...moveVal]);
    setSelectedCol((prv) => ({ ...prv, right: new Set() }));
  };
  return (
    <div className="container">
      <div className="column-container">
        {/* left */}
        <div className="sub-container">
          {leftCol.map((r) => {
            const selected = selectedCol.left.has(r.id);
            return (
              <button
                key={r.id}
                onClick={() => toggleSelect(r.id, "left")}
                className={`item ${selected ? "select" : ""}`}
              >
                {r.title}
              </button>
            );
          })}
        </div>
        {/* divider */}
        <div className="divider">
          <button onClick={moveRight} disabled={selectedCol.left.size === 0}>
            {right}
          </button>
          <button onClick={moveLeft} disabled={selectedCol.right.size === 0}>
            {left}
          </button>
        </div>
        {/* right */}
        <div className="sub-container">
          {rightCol.map((r) => {
            const selected = selectedCol.right.has(r.id);
            return (
              <button
                key={r.id}
                onClick={() => toggleSelect(r.id, "right")}
                className={`item ${selected ? "select" : ""}`}
              >
                {r.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColumnSelector;
