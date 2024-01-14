import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import style from "./Country.module.css";

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

  if (!country) {
    //아직 api 호출 응답이 전달되기 전 country=undefined 오류 해결
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}의 국가 이미지입니다.`}
      />
      <div className={style.body}>
        <div>
          <b>코드: </b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도: </b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>지역: </b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도: </b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}
