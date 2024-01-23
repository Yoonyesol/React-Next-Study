import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import SubLayout from "@/components/SubLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query; //쿼리 스트링 추출

  const [countries, setCountries] = useState([]); //국가 리스트 저장

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  // 컴포넌트 마운트 or 쿼리스트링 변화시에 실행
  useEffect(() => {
    if (q) {
      //쿼리스트링 존재시에만 리스트를 불러오기
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS 검색 결과" />
        <meta
          property="og:describe"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <SearchBar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
