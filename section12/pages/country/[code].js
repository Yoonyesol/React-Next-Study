import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import style from "./[code].module.css";
import Image from "next/image";
import Head from "next/head";

export default function Country({ country }) {
  const router = useRouter();
  // const code = router.query.code; //URL파라미터로 전달된 국가코드 꺼내오기
  const { code } = router.query; //구조분해 할당

  // props를 기다리는 상태
  if (router.isFallback) {
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
        <div>Loading...</div>
      </>
    );
  }

  // 혹시 api를 통해 데이터를 불러오는 것이 실패했을 때를 대비한 예외처리
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <>
      <Head>
        <title>{country.commonName} 국가 정보 조회 | NARAS</title>
        <meta property="og:image" content={country.flagImg} />
        <meta
          property="og:title"
          content={`${country.commonName} 국가 정보 조회 | NARAS`}
        />
        <meta
          property="og:describe"
          content={`${country.commonName} 국가의 자세한 정보입니다.`}
        />
      </Head>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.commonName}>
            {country.flagEmoji}&nbsp;{country.commonName}
          </div>
          <div className={style.officialName}>{country.officialName}</div>
        </div>
        <div className={style.flag_img}>
          <Image src={country.flagImg} fill />
        </div>
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
    </>
  );
}

Country.Layout = SubLayout; //SubLayout을 적용시켜준다.

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
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
    revalidate: 3, //3초 주기로 페이지 재생성
  };
};
