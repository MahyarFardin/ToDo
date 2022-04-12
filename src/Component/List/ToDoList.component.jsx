import React from "react";
import Jobs from "../Jobs/Jobs.component";
import "./ToDoList.style.css"

const ToDoList = ({toDoJobs, setToDoJobs, filteredItems}) => (
    <div className="todo-container">
        <ul className="todo-list">
            {filteredItems.map((toDoJob)=>(<Jobs text={toDoJob.text}  setToDoJobs={setToDoJobs} todos={toDoJobs} todo={toDoJob} key={toDoJob.id}/>))}
        </ul>
    </div>
)

export default ToDoList;