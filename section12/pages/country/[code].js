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

export const getServerSideProps = async (context) => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
  };
};
