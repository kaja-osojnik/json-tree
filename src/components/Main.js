import React, { Fragment, useState } from "react";
import Category from "./Category";
import initialState from "../initialState";
import AddCategoryItem from "./AddCategoryItem";
import { buildTree } from "../helperFunctions";
import edit from "../edit.svg";

const Main = () => {
  const [title, setTitle] = useState("MUSIC GENRES");
  const [err, setErr] = useState(false);
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [initialStateIds, setInitialStateIds] = useState(
    buildTree(initialState)
  );

  const onSubmit = () => {
    if (title === "") {
      setErr(true);
    } else {
      setShowEditTitle(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const onDelete = (id, setInitialStateIds) => {
    setInitialStateIds(initialStateIds.filter((x) => x.id !== id));
  };

  // const onDelete = (id) => {
  //   setInitialStateIds(initialStateIds.filter((x) => x.id !== id));
  // };

  return (
    <Fragment>
      <div className="w-20">
        {showEditTitle ? (
          <div className="input-add">
            <input
              className="title-input"
              autoFocus
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setErr(false);
                setTitle(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Edit Tree Title"
            />
            {err && <small>*Title can't be empty</small>}

            <div className="submit-sec">
              <button className="add-btn" onClick={onSubmit}>
                Change Title
              </button>
            </div>
          </div>
        ) : (
          <div className="flex title-wrap">
            <h1>{title}</h1>
            <img src={edit} alt="" onClick={() => setShowEditTitle(true)} />
          </div>
        )}

        <ul className="main-list">
          {initialStateIds.map((child) => (
            <Fragment key={child.id}>
              <Category tree={child} onDelete={() => onDelete(child.id)} />
            </Fragment>
          ))}
        </ul>
        <AddCategoryItem
          initialStateIds={initialStateIds}
          setInitialStateIds={setInitialStateIds}
          childId={initialStateIds.id}
          topLevel={true}
        />
      </div>
    </Fragment>
  );
};

export default Main;
