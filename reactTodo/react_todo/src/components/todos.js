import React from "react";
import Todo from "./todo"

const Todos = (props) => {
    return(
        <div className="d-flex justify-content-center p-4">
            <ul className="list-group w-50">
                { 
                    props.todos.map((todo, index) =>
                     <li key={index} className="list-group-item m-1">
                         <Todo todo={todo} deleteTodo={props.deleteTodo}/>
                     </li>)
                }
            </ul>
        </div>
    );
}

export default Todos;