import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
  const router = useRouter();
  // const code = router.query.code; //URL파라미터로 전달된 국가코드 꺼내오기
  const { code } = router.query; //구조분해 할당

  // props를 기다리는 상태
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // 혹시 api를 통해 데이터를 불러오는 것이 실패했을 때를 대비한 예외처리
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout; //SubLayout을 적용시켜준다.

export const getStaticPaths = async () => {
  return {
    path: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
  };
};
