import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode> 
  </HashRouter>
)