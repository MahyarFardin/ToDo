import React from "react";
import "./Inputs.style.css";

const Inputs = ({ inBoxText, setInBoxText, setToDoJobs, toDoJobs, setFilterType}) => {
    const inputHandeler = (e) => { setInBoxText(e.target.value) };
    const buttonHandeler = (e) => {
        e.preventDefault()
        
        setToDoJobs([...toDoJobs,
        { text: inBoxText, completed: false, id:Math.floor(Math.random()*100) }
        ])

        setInBoxText("")
    };

    //Filter Handeler
    const filterHandeler=(e)=>{
        setFilterType(e.target.value)
    };

    return (
        <div className="input-part" >
            <input value={inBoxText} onChange={inputHandeler} className="Input" placeholder="Enter Your Task Here"></input>
            <button className="plus" onClick={buttonHandeler} type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>

            <select onClick={filterHandeler}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="UnDone">UnDone</option>
            </select>
        </div >
    )
}

export default Inputs;