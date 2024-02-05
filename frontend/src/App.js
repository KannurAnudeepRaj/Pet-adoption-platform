// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PetSearch from './pages/PetSearch';
import AdoptionStatus from './pages/AdoptionStatus';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pet-search" component={PetSearch} />
        <Route path="/adoption-status" component={AdoptionStatus} />
      </Switch>
    </Router>
  );
}

export default App;
