import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  //console.log(Component.Layout);
  //Component가 Search 컴포넌트라면 SubLayout 값이 호출된다.

  const EmptyLayout = ({ children }) => <>{children}</>;
  //컴포넌트에 붙어있는 레이아웃이 있다면 그걸 사용하고 아니라면 그냥 children을 감싸주기만 하는 빈 레이아웃 적용
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
