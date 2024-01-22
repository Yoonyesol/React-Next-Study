import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

// 해당 컴포넌트를 SSG 방식으로 동작하게 한다.
// 내부 데이터는 빌드 타임에만 동작하여 html 파일로 변환된다.
export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
