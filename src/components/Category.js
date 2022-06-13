import React, { useState, useEffect } from "react";
import AddCategoryItem from "./AddCategoryItem";
import EditItem from "./EditItem";

const Category = ({ tree }) => {
  const [initialStateIds, setInitialStateIds] = useState(tree.children);

  useEffect(() => {
    async function addIds() {
      const data = await initialStateIds.map((x, i) => {
        var uniqid = Math.random().toString(36).substr(2, 9);
        x.id = uniqid;
        return x;
      });

      setInitialStateIds(data);
      return;
    }
    addIds();
  }, [initialStateIds]);

  return (
    <div className="border w30">
      <EditItem title={tree.title} id={tree.id} />

      <div className="flex">
        <ul>
          <AddCategoryItem
            initialStateIds={initialStateIds}
            setInitialStateIds={setInitialStateIds}
            childId={tree.id}
          />
          {initialStateIds.length
            ? initialStateIds.map((child, index) => (
                <li key={tree.id}>
                  <Category tree={child} childId={tree.id} />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Category;
