import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
