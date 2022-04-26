import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInp: "",
      index: -1,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editTodo.todo !== this.props.editTodo.todo) {
      this.setState({
        todoInp: this.props.editTodo.todo,
        index: this.props.editTodo.index,
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInp, this.state.index);
    this.setState({
      todoInp: "",
      index: -1,
    });
  };

  onInpChange = (event) => {
    this.setState({
      todoInp: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Add/Edit Todo</h1>
        <form
          className="todo-form-container"
          onSubmit={(event) => this.onSubmit(event)}
        >
          <input
            type="text"
            placeholder="Todo"
            value={this.state.todoInp}
            onChange={(event) => this.onInpChange(event)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
