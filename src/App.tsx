import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}