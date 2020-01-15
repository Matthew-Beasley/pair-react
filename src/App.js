import React from 'react';
import Companies from './companyList';
import Products from './productList';
import Users from './userList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Faker Data</h1>
      <div className="list-container">
      < Companies />
        <Products />
        <Users />
        </div>
    </div>
  );
}

export default App;
