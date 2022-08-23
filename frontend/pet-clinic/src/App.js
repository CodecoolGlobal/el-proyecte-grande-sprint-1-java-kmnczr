import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [Owners, fetchOwners] = useState([])

  const getData = (url, func) => {
    console.log("Something");
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        func(res)
      })
  }

  useEffect(() => {
    getData('http://localhost:8080/owners', fetchOwners)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Szia Kristóf!   :)</h1>
        <ul>
        {Owners.map((item, i) => {
          return <li key={i}>{item.firstName}</li>
        })}
      </ul>
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

export default App;
