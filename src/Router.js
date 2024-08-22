import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Login } from "./pages/sign/Login";
import { SignUp } from "./pages/sign/SignUp";
import { Normal } from "./pages/category/Normal";
import { Gram } from "./pages/category/Gram";
import { Caravan } from "./pages/category/Caravan";
import { Car } from "./pages/category/Car";
import { Pet } from "./pages/category/Pet";
import { PageNotFound } from "./pages/PageNotFound";
// import { Menu } from "./components/Menu";
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
        <Route path={routes.normal} element={<Normal />} />
        <Route path={routes.gram} element={<Gram />} />
        <Route path={routes.caravan} element={<Caravan />} />
        <Route path={routes.car} element={<Car />} />
        <Route path={routes.pet} element={<Pet />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {/* <Menu /> */}
      <Footer />
    </HashRouter>
  );
};

export default Router;
