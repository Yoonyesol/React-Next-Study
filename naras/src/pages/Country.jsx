import { useParams } from "react-router-dom";

export default function Country() {
  const params = useParams(); //URL 파라미터 값 꺼내오기. params 안에 현재 url의 값이 객체 형태로 담김

  return <div>Country: {params.code}</div>;
}
