import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function handleSubmit(event) {
  console.log("test2")
  event.preventDefault();

  // do something with form values, and then
  axios.post('http://localhost:3000/api/part', {

    "name":"Window Regulator2",
    "price":"150",
    "description":"2006 Honda",
    "compatibility":"2004 Honda",
    "count": 3
  }).then(response => {
    console.log("Hello")
    // do something with response, and on response
  }).catch(error => {
    console.log(error)
    // do something when request was unsuccessful
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form
          method="post"
          onSubmit={event => handleSubmit(event)}>
          <p>I like food</p>
          <button type="submit">Butane</button>
        </form>
        <img src={logo} className="App-logo" alt="logo" />
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
