import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nome = location.state?.Usuário;

  const irparalogin = () =>{
    navigate('/Login')
  }

  const irparacadastro = () =>{
    navigate('/Cadastro')
  }

  return (
    <div>
        <h1>Home do projeto</h1>
        {nome ? <h2>Seja bem-vindo!, {nome}</h2> : <p>Você não está logado</p>}
        <Button variant="primary" onClick={irparalogin}>Login</Button>
        <Button variant="primary" onClick={irparacadastro}>Cadastro</Button>
    </div>
  )
}

export default Home