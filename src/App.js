import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { todos } from './todos.json'

constructor () {
    super();
    this.state = {
        title: 'Aplicacion de tareas',
        ntareas: 10

    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tareas
          </a>
        </nav>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
