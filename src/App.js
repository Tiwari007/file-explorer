import { useState } from "react";
import FileExplorer from "./Components/FileExplorer";
import explorer from "./Data/Explorer";
import useTraverseTree from "./hooks/use-traverse-hook";
import "./styles.css";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer[0]);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, type) => {
    const finalTree = insertNode(explorerData, folderId, item, type);

    setExplorerData(finalTree);
  };

  if (!explorerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Hello My File Explorer</h1>
      <FileExplorer handleInsertNode={handleInsertNode} data={explorerData} />
    </div>
  );
}
