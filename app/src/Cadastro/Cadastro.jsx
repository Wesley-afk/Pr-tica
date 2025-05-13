import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
    const [nome, setNome] = useState('');
    const [idade, setidade] = useState('');
    const [saldo, setSaldo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault() //não deixar a página dar refresh

        if (nome === '' || idade === '' || saldo === '' || email === '' || senha === '') {
            alert('Preencha todos os campos');
            return;
        }

            try {
                const resposta = await fetch('http://localhost:3000/Usuários', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, idade, saldo, email, senha })
                })

                if (resposta.ok) {
                    alert('Deu tudo certo');
                }

                // Criando o login dele
                const CriandoLogin = await fetch('http://localhost:3000/Logins', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, senha, nome })
                })

                if (CriandoLogin.ok) {
                    alert('Login criado com sucesso!')
                    // passando o nome do usuário para a tela home
                    navigate('/', {state: {Usuários:nome}})
                    navigate('Login');
                    return;
                }
                else{
                    alert('erro ao criar login')
                }

            } catch (error) {
                console.log('Tudo errado', error);
                alert('Deu erro aí ó')
                return;
            }
        }

    // Para jogar os valores tem que ir no forcontrol e falar o value como objeto e falar o onchange.
    return (
        <Form onSubmit={handleSubmit}>
          <h2>Tela de Cadastro</h2>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text"
                    placeholder="Wesley"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    Nunca compartilharemos seu email com ningém (teoricamente) :)
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>idade</Form.Label>
                <Form.Control type="number"
                    placeholder="55"
                    value={idade}
                    onChange={(e) => setidade(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Saldo</Form.Label>
                <Form.Control type="number"
                    placeholder="50000"
                    value={saldo}
                    onChange={(e) => setSaldo(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;