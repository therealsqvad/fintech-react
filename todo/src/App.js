import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

class App extends Component {

  state = { tasks: [], inputed: '' };

  addTask = (e) => {
    e.preventDefault()
    this.setState({ tasks: [...this.state.tasks, this.state.inputed], inputed: '' });
  }

  inputchange = (e) => {
    this.setState({ inputed: e.target.value });
  }

  delTask(deletedTask) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== deletedTask)
    }));
  }

  changetask(task) {
    let arr = this.state.tasks;
    let index = arr.indexOf(task);
    let temp = prompt('Введите новое задание:');
    if (temp !== '') {
      arr[index] = temp;
    }
    this.setState({
      tasks: arr
    });
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
          <div id="todolist" hidden={this.state.tasks.length === 0}>

            <ul id="taskList">
              {
                this.state.tasks.map((task, index) => <li key={index} id={index} >
                <span onClick={this.changetask.bind(this, task)}>{task}</span>
                  <button className='delbtn' onClick={this.delTask.bind(this, task)}><b>X</b></button>
                </li>)
              }
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
