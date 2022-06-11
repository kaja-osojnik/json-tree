import React, { useState } from "react";

const EditItem = ({ title, id }) => {
  const [shotEditItem, setShowEditItem] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [err, setErr] = useState(false);

  const onSubmit = () => {
    if (newTitle === "") {
      setErr(true);
    } else {
      console.log(newTitle);
      setShowEditItem(false);
    }
  };

  return (
    <div className="flex">
      {!shotEditItem ? (
        <div onClick={() => setShowEditItem(true)}>
          <h2> {newTitle} </h2>
          <p>
            {" "}
            I'm an ID: <span className="red">{id}</span>{" "}
          </p>
        </div>
      ) : (
        <div>
          <input
            autoFocus
            type="text"
            name="newItem"
            value={newTitle}
            onChange={(e) => {
              setErr(false);
              setNewTitle(e.target.value);
            }}
          />
          {err && <small>*Item can't be empty.</small>}
          <button onClick={onSubmit}>ADD</button>
        </div>
      )}
    </div>
  );
};

export default EditItem;
