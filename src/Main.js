import React, { Fragment, useEffect, useState } from "react";
import Category from "./Category";
import initialState from "./initialState";

const Main = () => {
  const [showInput, setShowinput] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [err, setErr] = useState(false);
  const [initialStateIds, setInitialStateIds] = useState(initialState.children);

  useEffect(() => {
    async function addIds() {
      const data = await initialState.children.map((x, i) => {
        x.id = i;
        return x;
      });

      setInitialStateIds(data);
      return;
    }
    addIds();
  }, []);

  const onSubmit = () => {
    if (newItem === "") {
      setErr(true);
    } else {
      const newId = initialStateIds.length.toString();
      initialStateIds.push({ title: newItem, id: newId, children: [] });
      // console.log(initialStateIds);
      setShowinput(false);
    }
  };

  return (
    <Fragment>
      <h1>MUSIC GENRES</h1>
      <p className="pl16" onClick={() => setShowinput(!showInput)}>
        +
      </p>
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
      <div className="flex flex-between container">
        {initialStateIds.map((child) => {
          // console.log(child.id);
          return <Category tree={child} key={child.id} childId={child.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Main;
