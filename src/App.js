import logo from "./logo.svg";
import "./App.css";
import Navi from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";
import requests from "./api/requests";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/index";
import DetailPage from "./pages/DetailPage/index";
import SearchPage from "./pages/SearchPage/index";

const Layout = () => {
  return (
    <div>
      <Navi />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
