import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
