import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import register from "../services/mywallet";


export default function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return alert('As senhas não são iguais!');
    }

    const body = {
      name,
      email,
      password
    };

    register(body)
      .then(res => {
        alert('Usuário criado com sucesso!');
        navigate('/');
      })
      .catch(res => {
        console.log(res.data);
        alert("Email ou senha incorretos");
      });
  }

  return (
    <Wrapper>
      <h1>MyWallet</h1>
      <Form>
        <input type='text'
          placeholder="Nome"
          value={name}
          onChange={(e => setName(e.target.value))}
          required
        />
        <input type='email'
          placeholder="Email"
          value={email}
          onChange={(e => setEmail(e.target.value))}
          required
        />
        <input type='password'
          placeholder="Senha"
          value={password}
          onChange={(e => setPassword(e.target.value))}
          required />
        <input type='password'
          placeholder="Confirme sua senha"
          value={passwordConfirm}
          onChange={(e => setPasswordConfirm(e.target.value))}
          required />
        <button onClick={handleForm}>Cadastrar</button>
      </Form>
      <Link to='/'>Já tem uma conta? Entre agora!</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 30px;
  }

  a{
    text-decoration: none;
    font-size: 15px;
    font-style: 700;
    color: #FFFFFF;
    margin-top: 35px;

  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  font-size: 20px;

  input{
    width: 90%;
    max-width: 400px;
    height: 60px;
    padding: 15px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
  }

  button {
    width: 90%;
    max-width: 400px;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
    cursor: pointer;
    background-color: #A328D6;
    border: 1px solid #A32DB6;
    color: #FFFFFF;
    font-style: 700;
  }
`;