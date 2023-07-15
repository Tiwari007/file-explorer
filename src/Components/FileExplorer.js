import { useState } from "react";

const FileExplorer = ({ data, handleInsertNode }) => {
  console.log("data", data);

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    type: null
  });

  const [inputValue, setInputValue] = useState(null);

  const handleNewFolderOrFile = (e, type) => {
    setExpand(true);
    setShowInput({
      visible: true,
      type
    });
  };

  const onAddFolder = (e) => {
    e.stopPropagation();
    console.log("value", e.target.value);

    if (e.keyCode === 13 && e.target.value) {
      // add logic for adding folder name
      handleInsertNode(data.id, e.target.value, showInput.type);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <>
      {data?.type === "folder" ? (
        <div>
          <div>
            <span onClick={() => setExpand(!expand)}>📂 {data?.name} </span>
            <span>
              <button onClick={(e) => handleNewFolderOrFile(e, "folder")}>
                + Folder
              </button>
              <button onClick={(e) => handleNewFolderOrFile(e, "file")}>
                + File
              </button>
            </span>
          </div>
          <div style={{ marginLeft: "20px" }}>
            {showInput.visible && (
              <span>
                {showInput.type === "folder" ? "📂" : "📄"}
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  autoFocus
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  onKeyDown={(e) => onAddFolder(e)}
                />
              </span>
            )}
            {data.children?.map((childData, i) => {
              return (
                <div>
                  {expand && (
                    <FileExplorer
                      handleInsertNode={handleInsertNode}
                      data={childData}
                      key={i}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <span>📄 {data?.name} </span>
        </div>
      )}
    </>
  );
};

export default FileExplorer;
