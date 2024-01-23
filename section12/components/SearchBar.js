import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useRouter } from "next/router";

export default function SearchBar({ q }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    //검색한 내용을 서치바에 띄우기
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력하세요."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
