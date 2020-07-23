import React from "react";

const AddTaskForm = props => {
    return (
        <div className="taskForm">
            <p><input type="text" value={props.text} onChange={props.onTextChange} /></p>
            <button className="btn btn-1" onClick={props.addTask}>Add</button>
        </div>
    );
};

export default AddTaskForm;