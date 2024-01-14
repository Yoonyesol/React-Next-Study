import { useState } from "react";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

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
      nav(`/search?q=${search}`);
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
