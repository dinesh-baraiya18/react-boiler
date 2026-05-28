import { useState } from "react";
import AddComment from "./AddComment";

interface CommentType {
  id: string;
  text: string;
  children: CommentType[];
}

const NestedComments = () => {
  const [value, setValue] = useState<string>("");
  const [activeId, setActiveId] = useState<string>("")

  const [comment, setComment] = useState<CommentType[]>([]);

  const newComment = (inputVal: string) => {
    return {
      id: new Date().getTime().toString(),
      text: inputVal,
      children: []
    }
  }

  const handleComment = () => {
    if (!value) return alert("please enter input");
    setComment((prevData) => [...prevData, newComment(value)])
    setValue("");
  };

  const addReply = (id: string, inputValReply: string) => {
    const updateTree = (prevData: CommentType[]): CommentType[] => {
      return prevData.map((curVal) => {
        if (curVal.id === id) {
          return {
            ...curVal,
            children: [...curVal.children, newComment(inputValReply)]
          }
        }
        if (curVal.children.length > 0) {
          return {
            ...curVal,
            children: updateTree(curVal.children)
          }
        }
        return curVal
      })
    }
    setComment((prevData) => updateTree(prevData))
  }

  const handleEnterPressAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleComment()
    }
  }

  return (
    <>
      <h2>Nested Comments</h2>
      <br />
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleEnterPressAction(e)}
      />
      <button onClick={handleComment}>comment</button>
      {
        comment.length > 0 && (
          <>
            <ul>
              {comment.map((comment) => (
                <AddComment
                  key={comment.id}
                  comment={comment}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  addReply={addReply}
                />
              ))}
            </ul>
          </>
        )
      }
    </>
  );
};

export default NestedComments;