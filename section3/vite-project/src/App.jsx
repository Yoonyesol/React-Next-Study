import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

//라이프사이클
//1. 마운트(탄생)
//2. 업데이트(변화, 리렌더)
//3. 언마운트(죽음)

function App() {
  const [count, setCount] = useState(0);
  //상태변화 함수: 비동기적으로 동작

  const isMountRef = useRef(false); //값을 저장하는 레퍼런스 객체로 useRef 사용

  //1. 마운트
  useEffect(() => {
    console.log("마운트");
  }, []);

  //2. 업데이트(변화, 리렌더) 제어
  //코드 업데이트 시점에만 실행되도록 하는 useEffect
  useEffect(() => {
    if (!isMountRef.current) {
      //아래 코드의 가드 역할
      isMountRef.current = true;
      return; //아래 코드가 실행되지 않음
    }
    console.log("업데이트");
  });

  useEffect(() => {
    console.log(count);
  }, [count]); //의존성 배열(Deps)

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(`카운트: ${count}`);
    //useEffect가 필요한 이유!
    //count+value 변경된 값을 그대로 사용할 수 없음(상태변화 함수가 비동기이므로)
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
