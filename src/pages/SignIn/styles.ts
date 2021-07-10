import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: var(--blue);
`;

export const SignInForm = styled.form`
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    h2 {
        color: var(--text-title);
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    a {
        color: #969CB2;
        text-decoration: none;
        display: block;
        margin-top: 1rem;
        font-weight: 500;

        transition: color 0.2s;

        &:hover {
            color: ${shade(0.5, '#969CB2')};
        }
    }
`;