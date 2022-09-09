import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { getHistory } from "../services/mywallet";
import Movement from "./Movement";

export default function MainPage() {
  const [transactionsHistory, setTransactionsHistory] = useState([]);
  const { userData } = useContext(UserContext);

  //fazer um get de todas as contas da pessoa e colocar na variável de estado
  //se tiver, faz um map com a variável deestado para mostrar as movimentações
  //senão, coloca a mensagem "Não há registros de <br/> entrada ou de saída"

  useEffect(() => {
    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      };

      console.log(config);
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


  return (
    <Wrapper>
      <Header>
        <h2>Olá, {userData.name}</h2>
        <RiLogoutBoxRLine />
      </Header>
      <History>
        {transactionsHistory.length === 0 ? 'Não há registros de entradas ou saídas' :
          transactionsHistory.map((transaction, index) => <Movement key={index} movementData={transaction}
          />)}
      </History>
      <Footer>
        <div>
          <RiAddCircleLine />
          <p>Nova <br /> Entrada</p>
        </div>
        <div>
          <RiIndeterminateCircleLine />
          <p>Nova <br /> Saída</p>
        </div>
      </Footer>
    </Wrapper>
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
`;

const History = styled.div`
  margin: 15px 0;
  width: 100%;
  height: 100%;
  padding: 20px 15px 10px 15px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 25px
`;

const Footer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  gap: 15px;


  div{
    width: 100%;
    padding: 10px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 25px;
  }

  p{
    font-size: 18px;
    font-weight: 700;
  }
`;