// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css'; // Estilos principales
import './styles/styleguide.css'; // Variables globales
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
