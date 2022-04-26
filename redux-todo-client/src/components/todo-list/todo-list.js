import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo, fetchTodos } from "./../../redux";

function TodoList(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
    // fetch("http://localhost:5000/getTodos")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     dispatch(setTodos(result.data));
    //   });
  }, []);
  return (
    <div className="todo-list-container">
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
              <i
                className="fa fa-edit"
                onClick={() => dispatch(editTodo({ text: todo, index: i }))}
              ></i>
              <i
                className="fa fa-trash"
                onClick={() => dispatch(deleteTodo(i))}
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
