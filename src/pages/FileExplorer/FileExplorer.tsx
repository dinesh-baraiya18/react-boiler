import { useState } from "react";
import FilesTree from "./FilesTree";
import fileData from "./filedata.json";

interface FileType {
  text: string;
  type: string;
  children?: FileType[];
}

const FileExplorer = () => {
  const [folderData, setFolderData] = useState<FileType>(fileData);


  const updateDeleted = (data: FileType, slug: string): FileType => {
    if (!data.children) {
      return data;
    }
    const updatedData = data?.children.filter((item: FileType) => item.text !== slug);
    const deletedData = updatedData.map((item) => {
      if (item.children) {
        return updateDeleted(item, slug)
      }
      return item
    })

    return {
      ...data,
      children: deletedData
    }
  }

  const handleCreate = (folderName: string, inputVal: string) => {
    const updateTree = (data: FileType): FileType => {

      if (data.text === folderName && data.type === "folder") {

        const newItem: FileType = {
          text: inputVal,
          type: inputVal.includes(".") ? "file" : "folder",
          ...(!inputVal.includes(".") && {
            children: []
          })
        };

        return {
          ...data,
          children: [...(data.children || []), newItem]
        };
      }

      return {
        ...data,
        children: data.children?.map(updateTree)
      };
    };

    setFolderData(prev => updateTree(prev));
  };

  const handleDelete = (slug: string) => {
    if (slug === folderData.text) return;
    setFolderData(updateDeleted(folderData, slug))
  }

  return (
    <section className="file-explorer">
      <div>FileExplorer</div>
      <br />
      <br />
      <ul>
        <FilesTree
          data={folderData}
          handleDelete={handleDelete}
          handleCreate={handleCreate}
        />
      </ul>
    </section>
  );
};

export default FileExplorer;
