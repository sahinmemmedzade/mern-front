import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Existing CSS file
import './tailwind.css'; // New Tailwind CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
