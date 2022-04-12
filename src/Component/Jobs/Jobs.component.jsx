import React from "react";
import "./Jobs.style.css";

const Jobs = ({ text, todos, todo, setToDoJobs }) => {

    //removing from our list
    const deletHandeler = () => { setToDoJobs((todos.filter((el) => todo.id !== el.id))) };

    //done handeler
    const doneHandeler = () => {
        setToDoJobs(todos.map(
            (el => {
                if (todo.id === el.id) {
                    return { ...el, completer: !el.completed };
                }
            })))
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button onClick={doneHandeler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deletHandeler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};

export default Jobs;