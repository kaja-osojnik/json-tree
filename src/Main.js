import React, { Fragment, useEffect, useState } from "react";
import Category from "./Category";
import initialState from "./initialState";

const Main = () => {
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

  return (
    <Fragment>
      {initialStateIds.map((child) => {
        console.log(child.id);
        return <Category tree={child} key={child.id} childId={child.id} />;
      })}
    </Fragment>
  );
};

export default Main;
