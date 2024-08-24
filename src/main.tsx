import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GameContextProvider from './context/GameContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </StrictMode>,
);
