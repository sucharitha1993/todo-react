import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrEditTodo } from "../../redux";

function TodoForm(props) {
  const [todoInp, setTodo] = useState("");
  const editTodo = useSelector(state => state.activeTodoObj);
  const dispatch = useDispatch();
  const onTodoChange = (event) => {
    setTodo(event.target.value);
  };
  const onTodoSubmit = (event) => {
    dispatch(addOrEditTodo({text: todoInp, index: editTodo.index }))
    setTodo("");
  };
  useEffect(() => {
    setTodo(editTodo.text);
  }, [editTodo.index]);
  return (
    <div className="todo-form-container">
      <input
        placeholder="Add/Edit Todo"
        value={todoInp}
        onChange={onTodoChange}
      />
      <button onClick={onTodoSubmit}>Submit</button>
    </div>
  );
}
export default TodoForm;
