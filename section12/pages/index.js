export default function Home({ name }) {
  return <div>{name}</div>;
}

// 해당 컴포넌트를 SSR 방식으로 동작하게 한다.
export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  return {
    //반환값은 객체
    props: {
      //내부 값이 Home 컴포넌트에게 전달된다.
      name: "KOREA",
    }, //props의 값도 객체여야 함
  };
};
