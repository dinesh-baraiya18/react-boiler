import { useRef, useState } from "react";

interface CommentType {
  id: string;
  text: string;
  children: CommentType[];
}

interface Props {
  comment: CommentType;
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
  addReply: (id: string, inputValReply: string) => void
}

const AddComment = ({ comment, activeId, setActiveId, addReply }: Props) => {
  const { text, id, children } = comment;
  const [inputVal, setInputVal] = useState<string>("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleReply = (id: string) => {
    setActiveId((prev) => prev === id ? "" : id);
    setTimeout(() => { inputRef?.current?.focus() }, 100)
  }

  const handleAddReply = (id: string) => {
    if (!inputVal) return alert("please enter input");
    addReply(id, inputVal)
    setInputVal("")
  }

  const handleEnterPressAction = (e: React.KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key === "Enter") {
      handleAddReply(id)
    }
  }

  return (
    <>
      <li>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <p>{text}</p>
          <button onClick={() => handleReply(id)}>reply</button>
        </div>

        {
          activeId === id && (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input type="text" ref={inputRef} value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={(e) => handleEnterPressAction(e, id)} />
              <button onClick={() => handleAddReply(id)}>add</button>
            </div>
          )
        }

        {children.length > 0 && (
          <ul>
            {children.map((child) => (
              <AddComment
                key={child.id}
                comment={child}
                activeId={activeId}
                setActiveId={setActiveId}
                addReply={addReply}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  )
}

export default AddComment