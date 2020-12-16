import React, { useState } from 'react';

export const AddTask = (props) => {
    const[value,setValue] = useState("");
    return (
        <form 
            className="addTask-form" 
            onSubmit={(e) => {
                e.preventDefault(); 
                props.handeleAddTask(value); 
                props.showAddTask();
            }}
        >
            <input className='addTask-input' type='text' name='addTask' onChange={(e) => setValue(e.target.value)} />
            <button className="addTask-button">Add Task</button>
        </form>
    );
}

// export const AddTask = (props) => (
    
//         <form 
//             className="addTask-form" 
//             onSubmit={props.handeleAddTask}
//         >
//             <input className='addTask-input' type='text' name='addTask'  />
//             <button className="addTask-button">Add Task</button>
//         </form>
// );
