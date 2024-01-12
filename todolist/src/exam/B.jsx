import { useReducer } from "react";

//컴포넌트 외에 로직 작성
function reducer(state, action) {
  if (action.type === "DECREASE") {
    return state - action.data;
  } else if (action.type === "INCREASE") {
    return state + action.data;
  }
}

export default function B() {
  const [count, dispatch] = useReducer(reducer, 0);
  //count: state의 값
  //dispatch: 상태변화를 발동시키는 트리거 역할을 하는 함수
  //reducer: 상태변화를 처리하는 함수. 함수가 리턴될 시 count 값의 상태가 변화한다.
  //0: 초기값

  return (
    <div>
      <h4>{count}</h4>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE", data: 1 }); //action 객체
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE", data: 1 }); //action 객체
        }}
      >
        +
      </button>
    </div>
  );
}
