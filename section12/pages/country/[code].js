import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
  const router = useRouter();
  // const code = router.query.code; //URL파라미터로 전달된 국가코드 꺼내오기
  const { code } = router.query; //구조분해 할당

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
    fallback: false, //path에 명시하지 않은 경로의 요청이 오면 404페이지 반환
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
