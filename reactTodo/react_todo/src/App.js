import React from 'react';
import Input from './components/input';
import Navbar from './components/navbar';
import Todos from './components/todos';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: [],
    }
  }
  
  render(){
    const handleClick = () => {
      this.setState({
        todos: [...this.state.todos, this.state.todo],
        todo: '',
      });
    }
    
    const setTodo = e => {
      this.setState({
        todo: e.target.value,  
      })
      console.log(this.state.todo)
    }

    return (
      <div>
          <Navbar/>
          <Input
           setTodo={setTodo}
           handleClick={handleClick}
          />
      </div>
    );
  }
}
      
export default App;
