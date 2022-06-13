import React, { Fragment, useCallback, useEffect, useState } from "react";
import Category from "./Category";
import initialState from "../initialState";
import AddCategoryItem from "./AddCategoryItem";

const Main = () => {
  const [title, setTitle] = useState("MUSIC GENRES");
  const [initialStateIds, setInitialStateIds] = useState(initialState.children);
  const addIds = useCallback(() => {
    const data = initialState.children.map((x, i) => {
      const uniqid = Math.random().toString(36).substr(2, 9);
      x.id = uniqid;
      return x;
    });

    setInitialStateIds(data);
    return;
  }, [setInitialStateIds]);

  useEffect(() => {
    addIds();
  }, [addIds]);

  return (
    <Fragment>
      <h1>{title}</h1>
      <AddCategoryItem
        initialStateIds={initialStateIds}
        setInitialStateIds={setInitialStateIds}
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
