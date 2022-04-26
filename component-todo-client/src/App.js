import './App.css';
import TodoList from './components/todo-list/todo-list';
import TodoForm from './components/todo-form/todo-form';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], editTodo: { todo: "", index: "" } }
  }

  componentDidMount() {
    fetch('http://localhost:5000/getTodos')
      .then(res => res.json())
      .then((result) => {
        this.setState({ todos: result.data })
      });
  }

  addTodo = (todo, i) => {
    if (i > -1) {
      this.state.todos[i] = todo
      this.setState({
        todos: this.state.todos
      });
    } else {
      this.setState({
        todos: [...this.state.todos, todo]
      });
    }
  }

  deleteTodo = todo => {
    this.setState(prevState => ({
      todos: this.state.todos.filter(ele => ele !== todo)
    }))
  }

  editTodo = (todoInp, i) => {
    this.setState({
      editTodo: { todo: todoInp, index: i }
    })
  }

  render() {
    return (
      <div className="todos-container">
        <h1>Component classes - Todo App</h1>
        <TodoForm addTodo={this.addTodo} editTodo={this.state.editTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </div>
    );
  }

}

export default App;
