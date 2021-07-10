import { FormEvent, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Container, SignInForm } from "./styles";

export const SignUp: React.FC = () => {
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
                <h2>Faça o seu Cadastro</h2>
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