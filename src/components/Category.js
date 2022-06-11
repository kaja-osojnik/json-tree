import React, { useState, useEffect } from "react";
import AddCategoryItem from "./AddCategoryItem";
import EditItem from "./EditItem";

const Category = ({ tree }) => {
  const [initialStateIds, setInitialStateIds] = useState(tree.children);

  useEffect(() => {
    async function addIds() {
      const data = await initialStateIds.map((x, i) => {
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
    <div className="border w30">
      <EditItem title={tree.title} id={tree.id} />

      <div className="flex">
        <ul>
          <AddCategoryItem
            initialStateIds={initialStateIds}
            childId={tree.id}
          />
          {initialStateIds.length
            ? initialStateIds.map((child, index) => (
                <li>
                  <Category tree={child} key={tree.id} childId={tree.id} />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Category;
