import React from "react";
import "./Jobs.style.css";

const Jobs = ({ text, todos, todo, setToDoJobs }) => {

    const deletHandeler = () => { setToDoJobs((todos.map((el) => console.log(el))))};
    const doneHandeler = () => { };

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deletHandeler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};

export default Jobs;