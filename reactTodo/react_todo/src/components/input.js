import React from "react";

const Input = (props) => {
  return(
    <div className="d-flex justify-content-center">
      <div className="input-group w-50 p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Todo"
          onChange={props.setTodo}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit" 
            onClick={props.handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Input;