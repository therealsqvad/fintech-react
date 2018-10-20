import React, { Component } from 'react';
import logo from './TCSlogo.svg';
import './App.css';

class Counter extends Component {
  state = { counter: this.props.init, message: '' };
  up = () => {
    this.setState({counter: this.state.counter + this.props.step});
  }

  down = () => {
    this.setState({counter: this.state.counter - this.props.step});
  }
  
  reset = () => {
    this.setState({counter: this.props.init});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span id="count">Count: {this.state.counter}</span>
          <span id="message" hidden={this.state.counter !== this.props.max && this.state.counter !== -(this.props.max)}>{this.props.message}</span>
          <br />
          <button id="upButton" onClick={this.up}>UP</button>
          <button id="downButton" onClick={this.down}>DOWN</button>
          <button id="resetButton" onClick={this.reset}>RESET</button>
        </header>
      </div>
    );
  }
}

export default Counter;
