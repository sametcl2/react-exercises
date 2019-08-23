import React from 'react';
import Input from './components/input';
import Navbar from './components/navbar';
import Todos from './components/todos';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  }
  
  componentWillMount() {
    if(JSON.parse(localStorage.getItem('todos') === null)) {
      localStorage.setItem('todos', '');
    }
  }

  render(){
    const handleClick = e => {
      e.preventDefault();
      if(this.state.todo !== '') {
        this.setState({
          todos: [...this.state.todos, this.state.todo],  
          todo: '',
        }, () => localStorage.setItem('todos', JSON.stringify(this.state.todos)));   // setState param olarak callback func alabilir(miş).
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
      }, () => localStorage.setItem('todos', JSON.stringify(this.state.todos)))
    }

    return (
      <div>
          <Navbar/>
          <Input setTodo={setTodo} handleClick={handleClick} value={this.state.todo}/>
          <Todos todos={this.state.todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}
      
export default App;