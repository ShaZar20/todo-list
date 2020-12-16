import React from 'react';
import {BsXCircle} from 'react-icons/bs';
import {BsCheckBox} from 'react-icons/bs';
import {BsSquare} from 'react-icons/bs'

const Task = (props) => (
    <div className="task-container">
        <span
            onClick={(e) => {
                props.handleDoneTask(props.id);
            }}
            className= {props.isDone ? "task-isDone" : ""}
        >
            {props.isDone ?<BsCheckBox/> :  <BsSquare/>}{props.taskText}
        </span>
        <BsXCircle
            onClick={(e) => {
                props.handleDeleteTask(props.id);
            }}
            />
    </div>
)

export default Task;



