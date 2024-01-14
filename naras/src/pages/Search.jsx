import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";

export default function Search() {
  //searchParams: 현재 어떤 쿼리 스트링이 저장되어 있는지 정보를 담고 있는 객체
  //setSearchParams: 현재 쿼리 스트링을 변경할 수 있는 함수
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return <div></div>;
}
