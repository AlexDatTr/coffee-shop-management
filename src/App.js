import './App.css';
import React from 'react';
import Orders from './pages/Orders';
import HistoryOrder from './pages/HistoryOrder';

function App() {
  return (
    <div className="App">
      <Orders />
      <HistoryOrder/>
    </div>
  );
}

export default App;
