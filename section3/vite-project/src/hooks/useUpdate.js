import { useEffect, useRef } from "react";

export default function useUpdate(cb) {
  const isMountRef = useRef(false); //값을 저장하는 레퍼런스 객체로 useRef 사용
  //2. 업데이트(변화, 리렌더) 제어
  //코드 업데이트 시점에만 실행되도록 하는 useEffect
  useEffect(() => {
    if (!isMountRef.current) {
      //아래 코드의 가드 역할
      isMountRef.current = true;
      return; //아래 코드가 실행되지 않음
    }
    console.log("업데이트");

    cb(); //매개변수로 받은 콜백함수 실행
  });
}
