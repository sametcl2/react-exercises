import React, { Component } from 'react';
import Input from './input';
import Jumbotron from './jumbotron';

const API_KEY_CURRENT = 'd7f52eabeec62ec46ec845f3d882db9d';

class App extends Component{
    constructor() {
      super();
      this.state={
        name:'',
        data: ''
      }
    }

    handleChange = e => {
        this.setState({
          name: e.target.value
        });
      }

    handleClick = async () => {
      const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&units=metric&appid=${API_KEY_CURRENT}`;
      const response = await fetch(CURRENT_URL);
      const json = await response.json();
      this.setState({
        data: json
      });
    }
    
    render(){  
      return(
        <div>
          <Input
            onChange={this.handleChange}
            onClick={this.handleClick}
            value={this.state.name} />
          { this.state.data !== '' &&
            <Jumbotron 
            data={this.state.data}
            name={this.state.name} />
          }  
        </div>
      );
    }
  }
  
  export default App;