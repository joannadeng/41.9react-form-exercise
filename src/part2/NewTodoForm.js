import React, { useState } from "react";

const NewTodoForm = ({addTask}) => {
    const initialState = {
        task:''
    }

    const [task,setTask] = useState(initialState);

    const handleChange = (e) => {
        const{name, value} = e.target; 
        setTask(task => ({
            ...task,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); //why ?
        addTask({...task});
        setTask(initialState) // did not work 
    }
    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input 
            id="task"
            type="text"
            name="task"
            value={task.value}
            placeholder="task"
            onChange={handleChange}
            />
            <button>Add!</button>
            </form>
        </div>
        
    )

}

export default NewTodoForm