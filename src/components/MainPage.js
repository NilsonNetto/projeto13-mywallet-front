import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';
import UserContext from "../contexts/UserContext";
import TransactionContext from "../contexts/TransactionContext";
import { useContext, useEffect, useState } from "react";
import { getHistory, logout } from "../services/mywallet";
import Movement from "./Movement";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [transactionsHistory, setTransactionsHistory] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const { userData } = useContext(UserContext);
  const { setIncomeOrOutcome } = useContext(TransactionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      };

      getHistory(config)
        .then(res => {
          setTransactionsHistory(res.data);
        })
        .catch(res => {
          console.log(res.data);
          alert('Error');
        });
    }
  }, []);

  function logoutUser() {
    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      };

      logout(config)
        .then(res => {
          alert('Usuário deslogado com sucesso');
          navigate('/');
        })
        .catch(res => {
          console.log(res.data);
          alert('Error');
        });
    }
  }

  function sumTotalValue(history) {
    let value = 0;
    history.map(transaction => {
      if (transaction.type === "Income") {
        value = value + Number(transaction.price);
      } else if (transaction.type === "Outcome") {
        value = value - Number(transaction.price);
      } else {
        value = "Verificar tipo";
      }
    });
    value >= 0 ? setIsPositive(true) : setIsPositive(false);
    value = Number(value).toFixed(2);
    value = value.replace('.', ',');
    setTotalValue(value);
  }

  useEffect(() => {
    sumTotalValue(transactionsHistory);
  }, [transactionsHistory]);

  return (
    <Wrapper>
      <Header>
        <h2>Olá, {userData.name}</h2>
        <div> <RiLogoutBoxRLine onClick={logoutUser} /></div>

      </Header>
      <History>
        <Transactions transactionsHistory={transactionsHistory}>
          {transactionsHistory.length === 0 ? <p>Não há registros de entradas ou saídas</p> :
            transactionsHistory.map((transaction, index) => <Movement key={index} movementData={transaction}
            />)}
        </Transactions>
      </History>
      <Total isPositive={isPositive}>
        <div>
          Total:
        </div>
        <TotalValue isPositive={isPositive}>
          R$ {totalValue}
        </TotalValue>
      </Total>
      <Footer>
        <div onClick={() => {
          setIncomeOrOutcome(true);
          navigate('/transaction');
        }}>
          <RiAddCircleLine />
          <p>Nova <br /> Entrada</p>
        </div>
        <div onClick={() => {
          setIncomeOrOutcome(false);
          navigate('/transaction');
        }}>
          <RiIndeterminateCircleLine />
          <p>Nova <br /> Saída</p>
        </div>
      </Footer>
    </Wrapper >
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;

  .react-icons{
    font-size: 25px;
  }
`;

const Header = styled.div`
  width: 100%;
  margin: 15px 0 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  font-weight: 700;

  div{
    cursor: pointer;
  }
`;

const History = styled.div`
  margin: 15px 0 0 0;
  width: 100%;
  height: 100%;
  padding: 20px 15px 15px 15px;
  background-color: #FFFFFF;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  overflow-y: auto;
  text-align: center;

  p{
    margin: auto;
    color: #868686
  }
`;
const Transactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Total = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  border-radius: 0 0 5px 5px;
  background-color: #FFFFFF;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  font-size: 17px;
  font-weight: 700;
`;

const TotalValue = styled.div`
  color: ${({ isPositive }) => isPositive ? '#03AC00' : '#C70000'}
`;

const Footer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  gap: 15px;


  div{
    width: 100%;
    height: 115px;
    padding: 10px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 25px;
    cursor: pointer;
  }

  p{
    font-size: 18px;
    font-weight: 700;
  }
`;