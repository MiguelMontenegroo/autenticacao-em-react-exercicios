import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForms from "../../hooks/useForms.js";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL.js";


function LoginPage() {
const {form, onChange} = useForms({email:"", password:""})

  const navigate = useNavigate();
 
  const enviaLogin = (e) => {
    e.preventDefault()
      //criar a requisição carregando os dados do user: form (email e senha)
      axios.post(`${BASE_URL}/users/login`,form)
      .then((res)=>{
        localStorage.setItem('token',res.data.token)
        alert("Login realizado com sucesso")
        goToFeed(navigate)
      }).catch((err)=>{
        console.log(err.response.data)
      })



    console.log(form)
  }

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviaLogin}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name='email'
            required
            value={form.email}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name='password'
            required
            value={form.password}
            onChange={onChange}
          />
        </InputContainer>
        <button onClick={() => goToFeed(navigate)}>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
