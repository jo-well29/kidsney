import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/screens/Header'
import { Routes } from './routes/index.js'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
