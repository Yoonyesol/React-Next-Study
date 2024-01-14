import { useEffect, useState } from "react";
import { fetchCountries } from "../api";

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

  return <div></div>;
}
