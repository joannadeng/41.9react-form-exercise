import React, {useState} from "react";
import Todo from './Todo';
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from 'uuid';

const TodoList = () => {
    const initialState = [
        {id:uuid(), task:"grocery shopping"},
        {id:uuid(), task:"clean house"}
    ]

    const [todoList, setTodoList] = useState(initialState);
    const addTask = (newTask) => {
        setTodoList(todoList => [...todoList,{id:uuid(), ...newTask}])
    }
    console.log(todoList)

    return (
        <div className="TodoList">
            <h3>Chore list:</h3>
            <NewTodoForm addTask={addTask}/>
            <div>
                {todoList.map(({task},idx) => <Todo key={idx} id={idx} task={task}/>)}
            </div>
            
        </div>
    )
}

export default TodoList