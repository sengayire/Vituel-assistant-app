
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import '../assets/styles/styles.scss'

const App = () => (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
);

export default App;