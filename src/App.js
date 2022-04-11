import React, { Component } from 'react';
import './App.css';
//Components
import Inputs from './Component/Inputs/Inputs.component';
import ToDoList from './Component/List/ToDoList.component';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <Inputs/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
