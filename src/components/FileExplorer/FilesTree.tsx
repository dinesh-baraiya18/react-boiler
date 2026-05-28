import React, { useState } from "react";
import { fileIcons } from "./fileIcons";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

interface FileType {
  text: string;
  type: string;
  children?: FileType[];
}

interface FileProps {
  data: FileType;
  handleDelete: (slug: string) => void;
  handleCreate: (
    folderName: string,
    inputVal: string
  ) => void;
}

const FilesTree = ({ data, handleDelete, handleCreate }: FileProps) => {
  const { text, type, children } = data;
  const [currentFolderOpen, setCurrentFolderOpen] = useState<boolean>(false);
  const [isFileAdd, setIsFileAdd] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");


  const handleOpenFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type !== "folder") return;
    setCurrentFolderOpen((prev) => !prev);
  };

  const getFileIcon = (fileName: string) => {
    const fileExtension = fileName.split(".").pop();
    return fileIcons[fileExtension || 0];
  };

  return (
    <li
      style={{
        cursor: "pointer",
        borderLeft: "2px solid gray",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: "40px" }}>
          {type === "folder" ? (
            <div>
              {currentFolderOpen ? (
                <FaFolderOpen color="#ecc55a" />
              ) : (
                <FaFolder color="#ecc55a" />

              )}
            </div>
          ) : (
            <div>{getFileIcon(text)}</div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <p onClick={handleOpenFolder}>{text}</p>
          {type === "folder" && <button onClick={() => setIsFileAdd(prev => !prev)}>+</button>}
          <button
            style={{ background: "red", color: "#fff", padding: "5px" }}
            onClick={() => handleDelete(data.text)}
          >
            delete
          </button>
        </div>

      </div>
      {isFileAdd && (
        <div style={{ textAlign: "left", paddingLeft: "10px" }}>
          <input type="text" onChange={(e) => setInputVal(e.target.value)} />
          <button onClick={() => handleCreate(data.text, inputVal)}>add</button>
        </div>
      )}
      {currentFolderOpen && (
        <ul>
          {children &&
            children?.length > 0 &&
            children?.map((item, index) => (
              <FilesTree key={index} data={item} handleDelete={handleDelete} handleCreate={handleCreate} />
            ))}
        </ul>
      )}
    </li>
  );
};

export default FilesTree;
