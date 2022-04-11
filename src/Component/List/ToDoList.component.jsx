import React from "react";
import Jobs from "../Jobs/Jobs.component";
import "./ToDoList.style.css"

const ToDoList = ({toDoJobs, setToDoJobs}) => (
    <div className="todo-container">
        <ul className="todo-list">
            {toDoJobs.map((toDoJob)=>(<Jobs text={toDoJob.text}  setToDoJobs={setToDoJobs} todos={toDoJobs} todo={toDoJob} key={toDoJob.id}/>))}
        </ul>
    </div>
)

export default ToDoList;