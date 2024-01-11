import { useEffect } from "react";

export default function Even() {
  //3. 언마운트(죽음)
  useEffect(() => {
    //첫번째 콜백함수의 언마운트 시 실행되는 콜백함수 리턴
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수입니다.</div>;
}
