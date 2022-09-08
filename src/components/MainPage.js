import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';

export default function MainPage() {


  //fazer um get de todas as contas da pessoa e colocar na variável de estado
  //se tiver, faz um map com a variável deestado para mostrar as movimentações
  //senão, coloca a mensagem "Não há registros de <br/> entrada ou de saída"

  return (
    <Wrapper>
      <Header>
        <h2>Olá, Fulano</h2>
        <RiLogoutBoxRLine />
      </Header>
      <History>
        <Movement>
          <div>
            <Date>26/11</Date>
            <Description>Almoço com a mãe</Description>
          </div>
          <Price>R$ 26,66</Price>
        </Movement>
        <Movement>
          <div>
            <Date>26/11</Date>
            <Description>Almoço com a mãe</Description>
          </div>
          <Price>R$ 26,66</Price>
        </Movement>
        <Movement>
          <div>
            <Date>26/11</Date>
            <Description>Almoço com a mãe</Description>
          </div>
          <Price>R$ 26,66</Price>
        </Movement>
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

const Movement = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.span`
  font-size: 16px;
  color: #C6C6C6;
`;

const Description = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #000000;
`;

const Price = styled.span`
  font-size: 16px;
  color: ${({ price }) => price > 0 ? '#03AC00' : '#C70000'} 
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