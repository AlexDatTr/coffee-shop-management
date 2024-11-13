import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import Sales from './pages/Sales.js';
import Orders from './pages/Orders';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
      
      <div className="App">
        <header className="App-header">
          <h1>Hello, Coffee Shop!</h1>
        </header>
      </div>
    </>
  );
}

export default App;
