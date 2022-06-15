import React, { useState } from "react";
import AddCategoryItem from "./AddCategoryItem";
import EditItem from "./EditItem";

const Category = ({ tree, parent, setParent }) => {
  const [treeState, setTreeState] = useState(tree);
  const [showList, setShowList] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  return (
    <div className="relative">
      <EditItem
        parent={parent}
        setParent={setParent}
        title={tree.title}
        id={tree.id}
        tree={tree}
        setShowList={setShowList}
        showList={showList}
        setShowEditItem={setShowEditItem}
        treeState={treeState}
        setTreeState={setTreeState}
        showEditItem={showEditItem}
      />
      <ul>
        {treeState.children.length
          ? treeState.children.map((child) => (
              <li
                key={child.id}
                className={`list-inner ${showList ? "show" : ""}`}
              >
                <Category
                  tree={child}
                  childId={tree.id}
                  parent={treeState}
                  setParent={setTreeState}
                />
              </li>
            ))
          : ""}
        <AddCategoryItem
          treeState={treeState}
          setTreeState={setTreeState}
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
