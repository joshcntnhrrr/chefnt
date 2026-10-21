import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SelectionProvider } from './context/SelectionContext.jsx';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/app.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SelectionProvider>
        <App />
      </SelectionProvider>
    </BrowserRouter>
  </StrictMode>
);
