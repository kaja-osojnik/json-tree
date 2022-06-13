import React, { useState } from "react";

const AddCategoryItem = ({ initialStateIds, childId, setInitialStateIds }) => {
  const [newItem, setNewItem] = useState("");
  const [err, setErr] = useState(false);
  const [showInput, setShowinput] = useState(false);
  const newId = Math.random().toString(36).substr(2, 9);

  const onSubmit = () => {
    if (newItem === "") {
      setErr(true);
    } else {
      setInitialStateIds([
        ...initialStateIds,
        { title: newItem, children: [], id: newId },
      ]);

      setNewItem("");
      setShowinput("");
    }
  };

  return (
    <div>
      {" "}
      <p
        className="pl16"
        style={{ fontSize: "24px" }}
        onClick={() => setShowinput(!showInput)}
      >
        {showInput ? "-" : "+"}
      </p>
      {showInput && (
        <li className="flex">
          <div>
            <input
              autoFocus
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
    </div>
  );
};

export default AddCategoryItem;
