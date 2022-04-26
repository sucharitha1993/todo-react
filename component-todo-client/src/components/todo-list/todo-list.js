import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list-container">
        <h1> Todos List</h1>
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={todo}>
                {todo}{" "}
                <i
                  className="fa fa-edit"
                  onClick={() => this.props.editTodo(todo, i)}
                ></i>
                <i
                  className="fa fa-trash"
                  onClick={() => this.props.deleteTodo(todo)}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
