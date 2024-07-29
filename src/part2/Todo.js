import React from "react";

const Todo = ({task, id}) => {
    return (
        <div>
            <p>{id + 1}:{task}</p>
        </div>
    )
}
export default Todo;