import React, { useState, useEffect } from "react";

const Category = ({ tree, childId }) => {
  const [showInput, setShowinput] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [err, setErr] = useState(false);
  const [initialStateIds, setInitialStateIds] = useState(tree.children);

  useEffect(() => {
    async function addIds() {
      const data = await initialStateIds.map((x, i) => {
        x.id = childId + i.toString();
        return x;
      });

      setInitialStateIds(data);
      console.log(data);
      return;
    }
    addIds();
  }, []);

  const onSubmit = () => {
    if (newItem === "") {
      setErr(true);
    } else {
      // console.log(newItem);
      const newId = childId + initialStateIds.length.toString();
      tree.children.push({ title: newItem, id: newId, children: [] });
      // console.log(tree);
      setShowinput(false);
    }
  };

  return (
    <div className="border w30">
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
          {initialStateIds.length
            ? initialStateIds.map((child, index) => (
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
