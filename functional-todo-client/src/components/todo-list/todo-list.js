function TodoList(props) {
  // const deleteTodo = (i) => {
  //   props.deleteTodo(i);
  // };
  // const editTodo = (todo, indx) => {
  //     props.editTodo({text: todo, i: indx});
  // }
  return (
    <div className="todo-list-container">
      <ul>
        {props.todos.map((todo, indx) => {
          return (
            <li key={todo}>
              {todo}
              <i className="fa fa-edit" onClick={()=> props.editTodo({text: todo, i: indx})}></i> &nbsp;
              <i className="fa fa-trash" onClick={() => props.deleteTodo(indx)}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
