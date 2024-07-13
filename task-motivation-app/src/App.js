// U51313007
// src/App.js
import React from 'react';
import TaskGenerator from './TaskGenerator';
import FancyText from './FancyText';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <FancyText title text="Task Mnagement Motivation App" />
      <TaskGenerator />
      <footer>
        <FancyText text="© 2024 Hadi Awad. All rights reserved" />
      </footer>
    </div>
  );
}

export default App;