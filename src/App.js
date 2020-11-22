import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I'm full-stack web developer, working on commercial projects since 2011
        </p>
        <span>
          Feel free to message me on <a rel="noopener noreferrer" target="_blank" className="App-link" href="https://linkedin.com/in/htochko-webdev">linkedin</a> to get detailed CV
        </span>
      </header>
    </div>
  );
}

export default App;
