import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';

import { FiLogOut } from 'react-icons/fi';

import { Container, Content } from './styles';
import { useCallback } from 'react';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    const { signOut } = useAuth();

    const handleSignOut = useCallback(() => {
        signOut();
    }, [signOut]);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
                <FiLogOut size={30} color="#f0f2f5" onClick={handleSignOut} />
            </Content>
        </Container>
    )
}