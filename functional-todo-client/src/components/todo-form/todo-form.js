import { useState, useEffect } from "react";

function TodoForm(props) {
  const [todoInp, setTodo] = useState("");
  const onTodoChange = (event) => {
    setTodo(event.target.value);
  };
  const onTodoSubmit = (event) => {
    props.addOrEditTodo(todoInp, props.editTodo.i);
    setTodo("");
  };
  useEffect(() => {
    setTodo(props.editTodo.text);
  }, [props.editTodo.text]);
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
