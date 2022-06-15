import React, { useState } from "react";
import AddCategoryItem from "./AddCategoryItem";
import EditItem from "./EditItem";

const Category = ({ tree, onDelete }) => {
  const [initialStateIds, setInitialStateIds] = useState(tree.children);
  const [showList, setShowList] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);

  return (
    <div className="relative">
      <EditItem
        title={tree.title}
        id={tree.id}
        tree={tree}
        children={initialStateIds}
        setShowList={setShowList}
        showList={showList}
        setShowEditItem={setShowEditItem}
        setInitialStateIds={setInitialStateIds}
        showEditItem={showEditItem}
        onDelete={() => onDelete(tree.id, setInitialStateIds)}
      />

      <ul>
        {initialStateIds.length
          ? initialStateIds.map((child) => (
              <li
                key={child.id}
                className={`list-inner ${showList ? "show" : ""}`}
              >
                <Category tree={child} childId={tree.id} />
              </li>
            ))
          : ""}
        <AddCategoryItem
          initialStateIds={initialStateIds}
          setInitialStateIds={setInitialStateIds}
          childId={tree.id}
          setShowEditItem={setShowEditItem}
          showEditItem={showEditItem}
          setShowList={setShowList}
        />
      </ul>
    </div>
  );
};

export default Category;
