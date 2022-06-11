import React, { Fragment, useEffect, useState } from "react";
import Category from "./Category";
import initialState from "../initialState";
import AddCategoryItem from "./AddCategoryItem";

const Main = () => {
  const [initialStateIds, setInitialStateIds] = useState(initialState.children);

  useEffect(() => {
    async function addIds() {
      const data = await initialState.children.map((x, i) => {
        var uniqid = Date.now();
        var randLetter = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        var uniqid = randLetter + Date.now();
        x.id = uniqid;
        return x;
      });

      setInitialStateIds(data);
      return;
    }
    addIds();
  }, []);

  return (
    <Fragment>
      <h1>MUSIC GENRES</h1>
      <AddCategoryItem
        initialStateIds={initialStateIds}
        childId={initialStateIds.id}
      />
      <div className="flex flex-between container">
        {initialStateIds.map((child) => {
          return <Category tree={child} key={child.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Main;
