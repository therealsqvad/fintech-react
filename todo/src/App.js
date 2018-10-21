import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

class App extends Component {

  state = { tasks: [], inputed: ''};

addTask = (e) => {
  e.preventDefault()
   this.setState({tasks: [...this.state.tasks, this.state.inputed], inputed: ''});
}

inputchange = (e) => {
  this.setState({inputed: e.target.value});
}

  render() {
    return (
      <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.addTask}>
        <input type="textarea" id="inputtext" maxLength="60" value={this.state.inputed} onChange={this.inputchange}></input>
        <button id="add">Добавить</button>
        </form>
        <p>ToDo List:</p>
        <div id="todolist">

      <ul id="taskList">
        <li>{this.state.tasks}</li>
        <li>task2</li>
      </ul>
      </div>
      </header>
    </div>
    );
  }
}

export default App;
