import { useState } from 'react';

import { Header } from "../../components/Header";
import { NewTransactionModal } from '../../components/NewTransactionModal';

import { TransactionsProvider } from '../../hooks/useTransactions';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

        <Container>
            <Summary />
            <TransactionsTable />
        </Container>

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal} 
          />
      </TransactionsProvider>
  );
}