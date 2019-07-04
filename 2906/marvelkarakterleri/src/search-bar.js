import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.enter=this.enter.bind(this);
    }

    onInputChange(term){
        this.setState({
            term:term,
        })
    }
    
    enter(event){
        if(event.key === 'Enter'){
            this.props.onSearchButtonClicked(this.state.term)
        }
    }

    render(){
        return(
            <div className="col-md-6">
                <div className="input-group search-bar">
                    <input 
                    className="form-control"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    onKeyPress={this.enter}
                    />
                    <div className="input-group-append">
                        <button
                         className="btn btn-outline-secondary"
                         onClick={() => this.props.onSearchButtonClicked(this.state.term)}
                         >Button</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;