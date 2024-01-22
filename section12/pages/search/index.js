import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";

export default function Search({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;

//쿼리를 이용한 동적 라우팅을 위해 context 이용
//context: 브라우저의 접속요청에 대한 정보들이 저장되어 있다.
export const getServerSideProps = async (context) => {
  // 1. 검색 결과 api 호출
  // 2. props 리턴

  // const q = context.query.q;
  const { q } = context.query;

  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: { countries },
  };
};
