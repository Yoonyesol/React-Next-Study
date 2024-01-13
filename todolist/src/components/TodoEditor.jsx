import { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import { TodoContext } from "../TodoContext";

export default function TodoEditor() {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    //빈 문자열일 때
    if (content === "") {
      inputRef.current.focus(); //input 창 focus만 진행
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        ref={inputRef} //input태그에 inputRef가 접근할 수 있도록 해줌
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 TODO..."
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
