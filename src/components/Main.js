import React, { Fragment, useEffect, useState } from "react";
import Category from "./Category";
import initialState from "../initialState";
import AddCategoryItem from "./AddCategoryItem";
import { buildTree, generateId } from "../helperFunctions";
import edit from "../edit.svg";
import gsap from "gsap";

const Main = () => {
  const [title, setTitle] = useState("MUSIC GENRES");
  const [err, setErr] = useState(false);
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [parent, setParent] = useState({
    id: generateId(),
    title: "",
    children: buildTree(initialState),
  });

  useEffect(() => {
    gsap.to(".fadein", { autoAlpha: 1, duration: 1, delay: 1.5 });
  }, []);

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

  return (
    <Fragment>
      <div className="w-20">
        <div className="fadein">
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
            {parent.children.map((child) => (
              <Fragment key={child.id}>
                <Category tree={child} parent={parent} setParent={setParent} />
              </Fragment>
            ))}
          </ul>
          <AddCategoryItem
            treeState={parent}
            setTreeState={setParent}
            childId={parent.id}
            topLevel={true}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
