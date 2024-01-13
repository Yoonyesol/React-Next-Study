import { memo } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

//memo: 인수로 컴포넌트 전달받아서 최적화된 컴포넌트로 반환
const OptimizedHeaderComponent = memo(Header);

export default OptimizedHeaderComponent;
