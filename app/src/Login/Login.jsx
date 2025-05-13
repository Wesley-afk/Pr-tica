import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(''); 
    const navigate = useNavigate();

    const verificarLogin = async (e) => {
        e.preventDefault();

        if (email === '' || senha === '') {
            alert('Preencha todos os campos')
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/Logins?email=${email}&senha=${senha}`)
            const dados = await response.json();

            if (dados.length > 0) {
                //Se for maior do que 0 eu falo que meu login foi encontrado, caso contrário, não tem login 
                alert(`Login efetuado com sucesso! ${dados[0].nome}`);
                //passando o nome do usuário para a tela home
                navigate('/', {state: {Usuário: dados[0].nome}});
                return;
            }

        } catch (error) {
            alert('Deu erro.')
            console.log(error)
            return;
        }
    }
    return (
        <Form onSubmit={verificarLogin}>
          <h2>Tela de login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password"
                        placeholder="123456"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </Form.Group>

                <Form.Text className="text-muted">
                    Nunca compartilharemos seu email com ningém (teoricamente) :)
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login