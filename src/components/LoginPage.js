import { useState } from "react";
import styled from "styled-components";

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleForm(e) {
    e.preventDefault();

    const body = {
      email,
      password
    };


  }

  return (
    <Wrapper>
      <h1>MyWallet</h1>
      <input type='email'
        placeholder="email"
        value={email}
        onChange={(e => setEmail(e.target.value))}
        required
      />
      <input type='password'
        placeholder="senha"
        value={password}
        onChange={(e => setPassword(e.target.value))}
        required />
      <button>Entrar</button>
      <p>Primeira vez? Cadastre-se!</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;

  h1{
    font-family: 'Saira Stencil One', cursive;
  }

  input{
    width: 90%;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 4 4 0 rgba(0,0,0,0.25);
  }
`;