import React, { Fragment, useState } from "react";
import edit from "../edit.svg";
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";

const EditItem = ({
  title,
  id,
  children,
  setShowList,
  showList,
  showEditItem,
  setShowEditItem,
  onDelete,
  setInitialStateIds,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [err, setErr] = useState(false);

  const onSubmit = () => {
    if (newTitle === "") {
      setErr(true);
    } else {
      setShowEditItem(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="">
      {!showEditItem ? (
        <div className="flex list-item-unit">
          <img src={edit} alt="" onClick={() => setShowEditItem(true)} />
          <div
            className="flex"
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <p className="list-item-title"> {newTitle} </p>
            {children.length ? (
              <Fragment>
                {!showList ? (
                  <MdKeyboardArrowRight className="mt3" />
                ) : (
                  <MdKeyboardArrowUp className="mt3" />
                )}
              </Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div>
          <input
            autoFocus
            type="text"
            name="newItem"
            placeholder="Edit Item"
            value={newTitle}
            onChange={(e) => {
              setErr(false);
              setNewTitle(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          {err && <small>*Item can't be empty.</small>}
          <button className="add-btn" onClick={onSubmit}>
            Change
          </button>
          <button
            className="cancel"
            onClick={() => {
              onDelete(id, setInitialStateIds);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EditItem;
