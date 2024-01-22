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

// 해당 컴포넌트를 SSR 방식으로 동작하게 한다.
export const getServerSideProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
