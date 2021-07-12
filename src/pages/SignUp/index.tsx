import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api";

import { Container, SignInForm } from "./styles";

export const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSignUpFormSubmit(event: FormEvent) {
        event.preventDefault()

        await api.post('users', {
            name,
            email,
            password
        });

        history.push('/');
    };

    return (
        <Container>
            <SignInForm onSubmit={handleSignUpFormSubmit}>
                <h2>Faça o seu Cadastro</h2>
                <input
                    placeholder="Nome" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    placeholder="E-mail" 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)} 
                />
                <button type="submit">Cadastrar</button>
                <Link to="/">
                    Já possui uma conta? Faça Login!
                </Link>
            </SignInForm>
        </Container>
    );
}