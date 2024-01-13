import { useRef, useReducer, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { TodoContext } from "./TodoContext";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "설거지 하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
    case "DELETE": {
      return state.filter((todo) => todo.id !== action.data);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    //setTodo 대신 dispatch
    dispatch({
      //action객체
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content, //content로만 작성해도 가능(js 특성)
        createdDate: new Date().getTime(),
      }, //객체로 만드는 이유: 그렇게 설계해놨기 때문(mockData)
    });
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []); //의존성 배열. 배열 안의 내용이 바뀔 때 리렌더링됨

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", data: targetId });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <TodoEditor onCreate={onCreate} />
        <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
