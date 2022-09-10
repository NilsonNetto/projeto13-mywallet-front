import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { makeTransaction } from "../services/mywallet";
import TransactionContext from "../contexts/TransactionContext";

export default function Transaction() {

  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const { userData } = useContext(UserContext);
  const { incomeOrOutcome } = useContext(TransactionContext);
  const navigate = useNavigate();
  const type = incomeOrOutcome ? "Income" : "Outcome";

  function handleForm(e) {
    e.preventDefault();

    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      };

      const body = {
        description,
        price,
        type
      };

      makeTransaction(body, config)
        .then(res => {
          navigate('/main');
        })
        .catch(res => {
          console.log(res.data);
          alert('Erro ao fazer transação');
        });
    }
  }

  return (
    <Wrapper>
      <Header>{incomeOrOutcome ? "Nova Entrada" : "Nova Saída"}</Header>
      <Form onSubmit={e => handleForm(e)}>
        <input type='number'
          min='0'
          step='0.01'
          placeholder="Valor"
          value={price}
          onChange={(e => setPrice(e.target.value))}
          required
        />
        <input type='text'
          placeholder="Descrição"
          value={description}
          onChange={(e => setDescription(e.target.value))}
          required
        />
        <button>{incomeOrOutcome ? "Salvar Entrada" : "Salvar Saída"}</button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  margin: 15px 0 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  font-weight: 700;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 20px;

  input{
    width: 100%;
    height: 50px;
    padding: 15px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
    cursor: pointer;
    background-color: #A328D6;
    border: 1px solid #A32DB6;
    color: #FFFFFF;
    font-style: 700;
  }
`;