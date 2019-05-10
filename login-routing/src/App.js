import React from 'react';
import LoginPage from './components/login';
import './App.css';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import { history } from './components/history';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={HomePage} />
          </div>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
