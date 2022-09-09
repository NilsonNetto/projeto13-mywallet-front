import GlobalStyle from "../assets/GlobalStyle";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App() {

  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}