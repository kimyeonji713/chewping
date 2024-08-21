import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Login } from "./pages/sign/Login";
import { SignUp } from "./pages/sign/SignUp";
import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
