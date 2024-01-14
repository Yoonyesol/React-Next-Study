import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import style from "./Home.module.css";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    //비동기 코드이므로 불러올 때도 await 필요
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <SearchBar />
      <CountryList countries={countries} />
    </div>
  );
}
