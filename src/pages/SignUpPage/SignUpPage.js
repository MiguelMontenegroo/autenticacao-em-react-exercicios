import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import useForms from "../../hooks/useForms";
import axios from 'axios'
import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";

function SignUpPage() {
 const {form, onChange} = useForms({nome: "", email: "", senha: ""})
 
  const navigate = useNavigate();

  const enviarCadastro = (e) => {
    e.preventDefault()
    const dadosUsuario = {
      name: form.nome,
      email: form.email,
      password: form.senha
    }
    axios.post(`${BASE_URL}/users/signup`,dadosUsuario)
    .then((res)=>{
       console.log(res)
       localStorage.setItem('token',res.data.token)
               alert('Olha o token: '+res.data.token)
               goToFeed(navigate)
  }).catch((err)=> {
    alert(err.response.data)
  })}

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={enviarCadastro}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name='nome'
            value={form.nome}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name='email'
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name='senha'
            value={form.senha}
            onChange={onChange}
            required
          />
        </InputContainer>

        <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;