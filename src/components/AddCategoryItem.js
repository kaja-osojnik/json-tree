import React, { useState } from "react";

const AddCategoryItem = ({
  initialStateIds,
  setInitialStateIds,
  showEditItem,
  topLevel,
  setShowList,
}) => {
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
      setShowinput(false);
      setShowList(true);
    }
  };

  const onCancel = () => {
    setNewItem("");
    setShowinput(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <li className="mb32">
      {!showEditItem && !topLevel && (
        <p className="add-wrap" onClick={() => setShowinput(!showInput)}>
          {!showInput && <span className="plus">+</span>}
        </p>
      )}

      {!showEditItem && topLevel && (
        <p onClick={() => setShowinput(!showInput)}>
          {!showInput && <span className="plus">+</span>}
        </p>
      )}

      {showInput && (
        <div className="input-add">
          <input
            autoFocus
            type="text"
            name="newItem"
            value={newItem}
            onChange={(e) => {
              setErr(false);
              setNewItem(e.target.value);
            }}
            placeholder="Add New Item"
            onKeyDown={handleKeyDown}
          />
          {err && <small>*Can not add an empty element</small>}

          <div className="submit-sec">
            <button className="add-btn" onClick={onSubmit}>
              Add
            </button>
            <button className="cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default AddCategoryItem;
