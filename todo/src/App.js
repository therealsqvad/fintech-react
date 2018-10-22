import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

class App extends Component {

  state = {
    tasks: [],
    inputed: ''
  };

  addTask = (e) => {
    e.preventDefault()
    this.setState({
      tasks: [...this.state.tasks, this.state.inputed],
      inputed: ''
    });
  }

  inputchange = (e) => {
    this.setState({
      inputed: e.target.value
    });
  }

  delTask(deletedTask) {
    let tempArr = this.state.tasks;
    let index = tempArr.indexOf(deletedTask);
    tempArr.splice(index, 1);
    this.setState({
      tasks: tempArr
    });
  }

  changetask(task) {
    let tempArr = this.state.tasks;
    let index = tempArr.indexOf(task);
    let temp = prompt('Введите новое задание:');
    if (temp !== '' && temp !== null) {
      tempArr[index] = temp;
    }
    this.setState({
      tasks: tempArr
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img
            src={logo}
            className='App-logo'
            alt='logo'
          />
          <form onSubmit={this.addTask}>
            <input
              type='textarea'
              id='inputtext'
              maxLength='60'
              value={this.state.inputed}
              onChange={this.inputchange}
            />
            <button id='add'>Добавить</button>
          </form>
          <p>ToDo List:</p>
          <div id='todolist' hidden={this.state.tasks.length === 0}>

            <ul id='taskList'>
              {
                this.state.tasks.map((task, index) => {
                  return (
                    <li key={'task' + index} id={index} >
                      <span onClick={() => this.changetask(task)}>
                        {task}
                      </span>
                      <button
                        className='delbtn'
                        onClick={() => this.delTask(task)}
                      >
                        <b>
                          X
                        </b>
                      </button>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
