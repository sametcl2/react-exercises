import React from "react";

const Input = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg w-50 mt-5">
                <input
                 type="text"
                 className="form-control"
                 placeholder="Name of Book"
                 onChange={props.onChange}
                 value={props.value} />
                <div className="input-group-append">
                    <button 
                     type="submit"
                     className="btn btn-outline-primary"
                     onClick={props.onClick}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Input;