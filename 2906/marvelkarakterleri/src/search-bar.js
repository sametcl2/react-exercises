import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="col-md-6">
                <div className="input-group search-bar">
                    <input className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary">Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;