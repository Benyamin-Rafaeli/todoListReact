import ReactDOM from 'react-dom/client';
import './views/styles/commom.scss'
import './views/styles/reset.scss'
import { App } from './views/App';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
