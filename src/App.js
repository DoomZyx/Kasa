import React from 'react';

// Router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants
import Header from './components/Header';

// Pages  

// Import stylesheets
import '../index.css'
import '../style.scss'

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
