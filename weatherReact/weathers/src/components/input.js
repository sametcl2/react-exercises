import React from 'react';

const Input = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="input-group mt-5 w-50">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid city name"
                    onChange={props.onChange}
                    value={props.value}/>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={props.onClick}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Input;