import React from "react"

const Todo = (props) => {
    return(
        <div className="d-flex justify-content-between align-items-center">
            {props.todo}
            <button type="button" className="btn btn-danger" onClick={() => props.deleteTodo(props.todo)}>Done</button>
        </div>
    );
}

export default Todo;