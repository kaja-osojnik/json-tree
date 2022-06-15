export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const buildTree = (tree) => {
  const data = tree.children.map((child, index) => {
    if (child.children.length) {
      buildTree(child);
    }

    child.id = generateId();
    return child;
  });
  return data;
};
