import React, { useState } from "react";

const Category = ({ tree, childId }) => {
  const [showInput, setShowinput] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newId, setNewId] = useState(null);
  const [err, setErr] = useState(false);

  const onSubmit = () => {
    if (newItem === "") {
      setErr(true);
    } else {
      console.log(newItem);
      const newId = childId + tree.children.length.toString();
      tree.children.push({ title: newItem, id: newId, children: [] });
      console.log(tree);
      setShowinput(false);
    }
  };

  return (
    <div>
      <div className="flex">
        <h2> {tree.title} </h2>
        <p>
          {" "}
          I'm an ID: <span className="red">{childId}</span>{" "}
        </p>
        <p className="pl16" onClick={() => setShowinput(!showInput)}>
          +
        </p>
      </div>

      <div className="flex">
        <ul>
          {showInput && (
            <li className="flex">
              <div>
                <input
                  type="text"
                  name="newItem"
                  value={newItem}
                  onChange={(e) => {
                    setErr(false);
                    setNewItem(e.target.value);
                  }}
                />
                {err && <small>*Can not add an empty element</small>}
              </div>

              <button onClick={onSubmit}>ADD</button>
            </li>
          )}
          {tree.children.length
            ? tree.children.map((child, index) => (
                <li>
                  <Category
                    tree={child}
                    key={childId + index.toString()}
                    childId={childId + index.toString()}
                  />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Category;
