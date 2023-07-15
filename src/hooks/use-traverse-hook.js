const useTraverseTree = () => {
  function insertNode(tree, folderId, item, type) {
    if (tree.id === folderId && tree.type === "folder") {
      tree?.children?.unshift({
        id: new Date().getTime(),
        name: item,
        type,
        items: []
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree?.children?.map((singleData) => {
      return insertNode(singleData, folderId, item, type);
    });

    return { ...tree, children: latestNode };
  }

  //const deleteNode = () => {};
  //const updateNode = () => {};
  //return { insertNode, deleteNode, updateNode };

  return { insertNode };
};

export default useTraverseTree;
