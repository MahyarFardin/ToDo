import React, { useState } from 'react';
import './App.css';
//Components
import Inputs from './Component/Inputs/Inputs.component';
import ToDoList from './Component/List/ToDoList.component';

const App = () => {
  //My Variables Using Hooks

  const [inBoxText, setInBoxText] = useState("");
  const [toDoJobs, setToDoJobs] = useState([]);
  const [filterType, setFilterType] = useState("All");

  //Return of this functions
  return (
    <div className='App'>
      <h1>ToDo App</h1>
      <Inputs setFilterType={setFilterType} toDoJobs={toDoJobs} inBoxText={inBoxText} setInBoxText={setInBoxText} setToDoJobs={setToDoJobs} />
      <ToDoList setToDoJobs={setToDoJobs} toDoJobs={toDoJobs}/>
    </div>
  );
}

export default App;
