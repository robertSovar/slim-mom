import { Routes, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./assets/utils/Layout/Layout";
import { Provider } from "react-redux";
import store from "./Store";
import { useEffect } from "react";

function App() {
  const history = useHistory();
  useEffect(() => {
    const pathname = window.location.search.slice(1);
    if (pathname) {
      history.replace(pathname);
    }
  }, [history]);
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
