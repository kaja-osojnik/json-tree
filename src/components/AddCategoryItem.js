import React, { useState, useEffect } from "react";

const AddCategoryItem = ({ initialStateIds, childId }) => {
  const [newItem, setNewItem] = useState("");
  const [err, setErr] = useState(false);
  const [showInput, setShowinput] = useState(false);

  const onSubmit = () => {
    if (newItem === "") {
      setErr(true);
    } else {
      if (childId) {
        const newId = parseInt(childId + initialStateIds.length.toString());
        initialStateIds.push({ title: newItem, children: [], id: newId });
      } else {
        const newId = initialStateIds.length;
        initialStateIds.push({ title: newItem, children: [], id: newId });
      }

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
