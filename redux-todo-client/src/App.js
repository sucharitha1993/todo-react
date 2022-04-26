import "./App.css";
import TodoList from "./components/todo-list/todo-list";
import TodoForm from "./components/todo-form/todo-form";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> React-Redux Todos App </h1>
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
