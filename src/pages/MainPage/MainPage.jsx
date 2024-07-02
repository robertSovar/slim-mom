import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LandingPage from "../../components/LandingPage/LandingPage";

function MainPage() {
  return (
    <>
      <Header>
        <Outlet />
      </Header>
      <LandingPage />
      <Footer />
    </>
  );
}

export default MainPage;
