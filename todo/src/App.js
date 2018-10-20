import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <div id="todolist">
      <center>ToDo List:</center>
      <ul>
        <li>task1</li>
        <li>task2</li>
      </ul>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <span id="count">Count: {}</span>
        <span id="message"></span>
        <br />
        <button id="upButton">UP</button>
        <button id="downButton">DOWN</button>
        <button id="resetButton">RESET</button>
      </header>
    </div>
    );
  }
}

export default App;
