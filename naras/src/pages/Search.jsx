import { useSearchParams } from "react-router-dom";

export default function Search() {
  //searchParams: 현재 어떤 쿼리 스트링이 저장되어 있는지 정보를 담고 있는 객체
  //setSearchParams: 현재 쿼리 스트링을 변경할 수 있는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  //http://localhost:5173/search?q=123 이렇게 입력하면 화면에 123이 뜬다.
  return <div>{searchParams.get("q")}</div>;
}
