import axios from "axios";

export async function fetchCountries() {
  try {
    //api: 비동기로 동작. 호출한다고 해서 바로 값이 response에 담기는 것이 아님
    //async: 내부에 await를 사용할 수 있게 됨
    //await: 비동기 코드를 기다렸다가 response에 넣어준다.
    const response = await axios.get("https://naras-api.vercel.app/all");

    return response.data;
  } catch (e) {
    //에러대응 코드
    return [];
  }
}
