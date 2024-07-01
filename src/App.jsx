import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
