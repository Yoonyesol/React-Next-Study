import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

export default function CountryList({ countries }) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

//오류가 생겼을 경우 아래 데이터를 불러옴
CountryList.defaultProps = {
  countries: [],
};
