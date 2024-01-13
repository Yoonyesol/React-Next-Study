import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/country"}>Country</Link>
      </div>
    </>
  );
}

export default App;
