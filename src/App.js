import React, { useState, useEffect } from 'react';
import './App.css';
//Components
import Inputs from './Component/Inputs/Inputs.component';
import ToDoList from './Component/List/ToDoList.component';

const App = () => {
  //States
  const [inBoxText, setInBoxText] = useState("");
  const [toDoJobs, setToDoJobs] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  //Filtering my list
  const filterHandeler = () => {
    if (filterType === "All") {
      setFilteredItems(toDoJobs);
    }
    else if (filterType === "Completed") {
      setFilteredItems(toDoJobs.filter((todo) => (todo.completed === true)));
    }
    else {
      setFilteredItems(toDoJobs.filter((todo) => (todo.completed === false)));
    }
  };

  // run only one time
  useEffect(() => {
    getLocal();
  }, []);

  // call filter handeler when items chainge
  useEffect(() => {
    filterHandeler();
    saveToLocal();
  }, [toDoJobs, filterType]);


  // Save to local
  const saveToLocal = () => {
    localStorage.setItem("toDoJobs", JSON.stringify(toDoJobs));
  }

  // Get local todos
  const getLocal = () => {
    if (localStorage.getItem("toDoJobs") === null) {
      localStorage.setItem("toDoJobs", JSON.stringify([]));
    }
    else {
      let storageToDo = JSON.parse(localStorage.getItem("toDoJobs"));
      setToDoJobs(storageToDo);
    }
  }

  //Return of this functions
  return (
    <div className='App'>
      <h1>ToDo App</h1>
      <Inputs setFilterType={setFilterType} toDoJobs={toDoJobs} inBoxText={inBoxText} setInBoxText={setInBoxText} setToDoJobs={setToDoJobs} />
      <ToDoList filteredItems={filteredItems} setToDoJobs={setToDoJobs} toDoJobs={toDoJobs} />
    </div>
  );
}

export default App;
