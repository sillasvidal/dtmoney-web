import { FormEvent, useCallback, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Container, SignInForm } from "./styles";

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();
    const history = useHistory();

    const handleSignInFormSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault()

        await signIn({
            email,
            password
        });

        history.push('/dashboard');
    }, [signIn, history, email, password]);

    return (
        <Container>
            <SignInForm onSubmit={handleSignInFormSubmit}>
                <h2>Faça o seu Login</h2>
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
                <button type="submit">Entrar</button>
                <Link to="/signup">
                    Ainda não tem conta? Cadastre-se grátis!
                </Link>
            </SignInForm>
        </Container>
    );
}