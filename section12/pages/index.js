import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:describe"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <SearchBar />
      <CountryList countries={countries} />
    </>
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
