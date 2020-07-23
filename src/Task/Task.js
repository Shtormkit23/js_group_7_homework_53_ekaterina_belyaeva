import React from 'react';

const Task = props => {
    return (
        <div className="task">
            <p>{props.text}</p>
            <button className="btn" onClick={props.remove}>Delete</button>
        </div>
    );
};

export default Task;