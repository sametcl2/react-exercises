import React from 'react';
import Input from './components/input';
import Navbar from './components/navbar';
import Todos from './components/todos';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: ['ekmek al', 'su al'],
    }
  }
  
  render(){
    const handleClick = e => {
      e.preventDefault();
      if(this.state.todo !== '') {
        this.setState({
          todos: [...this.state.todos, this.state.todo],  
          todo: '',
        });
      }
    }
    
    const setTodo = e => {
      this.setState({
        todo: e.target.value,
      })
    }

    const deleteTodo = todo => {
      this.setState({
        todos: this.state.todos.includes(todo) ? this.state.todos.filter(item => !item.match(todo)) : this.state.todos
      })
    }

    return (
      <div>
          <Navbar/>
          <Input setTodo={setTodo} handleClick={handleClick} />
          <Todos todos={this.state.todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}
      
export default App;