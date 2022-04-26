import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/todo-list/todo-list";
import TodoForm from "./components/todo-form/todo-form";

function App() {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditTodo] = useState({ text: "", i: -1 });

  useEffect(() => {
    fetch("http://localhost:5000/getTodos")
      .then((res) => res.json())
      .then((result) => {
        setTodos(result.data);
        console.log(todos);
      });
  }, []);

  const addOrEditTodo = (todo, i) => {
    if (i > -1) {
      todos[i] = todo;
      setTodos([...todos]);
    } else {
      setTodos([...todos, todo]);
    }
    setEditTodo({ text: "", i: -1 })
  };
  const deleteTodo = (i) => {
    setTodos(todos.filter((ele) => todos.indexOf(ele) !== i));
  };
  // const editTodo = (obj) => {
  //   setEditTodo(obj);
  // };
  return (
    <div className="App">
      <h1>Functional classes - Create or Edit Todo</h1>
      <TodoForm addOrEditTodo={addOrEditTodo} editTodo={editedTodo} />
      <h1> Todos </h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={(obj)=> setEditTodo(obj)} />
    </div>
  );
}

export default App;
