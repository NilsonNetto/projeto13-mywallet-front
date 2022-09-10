import GlobalStyle from "../assets/GlobalStyle";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import TransactionContext from "../contexts/TransactionContext";
import Transaction from "./Transaction";

export default function App() {

  const [userData, setUserData] = useState();
  const [incomeOrOutcome, setIncomeOrOutcome] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <TransactionContext.Provider value={{ incomeOrOutcome, setIncomeOrOutcome }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
        </BrowserRouter>
      </TransactionContext.Provider>
    </UserContext.Provider>
  );
}