import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";

export default function Country() {
  const params = useParams(); //URL 파라미터 값 꺼내오기. params 안에 현재 url의 값이 객체 형태로 담김
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  return <div>Country: {params.code}</div>;
}
