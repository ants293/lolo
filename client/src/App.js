import React from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  requestArticles();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

async function requestArticles() {
  try {
    const response = await axios.get('http://localhost:5000/api');
    console.log(response);
  } catch {

  }

}
