import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoContext } from "../TodoContext";

export default function TodoList() {
  const { todos, onUpdate, onDelete } = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  //구조분해 할당으로 받아오기
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    //실행할 내용이 담긴 콜백함수
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); //todos의 값이 바뀔 때마다 실행된다.

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 todo: {totalCount}</div>
        <div>완료 todo: {doneCount}</div>
        <div>미완 todo: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {/* map을 이용해 리스트 형태로 렌더링, key props필수 */}
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
