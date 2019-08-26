import React, { Component } from 'react';
import Header from './components/header';
import Input from './components/input';
import Books from './components/books';

const API_KEY = 'AIzaSyBv4i2XhkqIeAaDh5B4vfcwGW8W42qp12o'; 

export default class App extends Component {
  constructor() {
    super();
    this.state={
      name: '',
      json: ''
    }
  }

  render(){
    const handleOnChange = e => {
      this.setState({
        name: e.target.value,
      })
    }

    const handleClick = e => {
      e.preventDefault();
      fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.name}&key=${API_KEY}`)
        .then(response => {
          return response.json();
        })
        .then(json => 
          this.setState({
            json,
          }, () => console.log(this.state.json))  
        );
    }
    
    return (
      <div>
        <Header />
        <Input
          onChange={handleOnChange}
          value={this.state.name}
          onClick={handleClick} />
        {
          this.state.json !== '' &&
          <Books data={this.state.json} />
        }
      </div>
    );
  }
}