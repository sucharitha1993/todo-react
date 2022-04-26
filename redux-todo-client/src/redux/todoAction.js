import {
  SET_EDIT_TODO,
  ADD_OR_EDIT_TODO,
  DELETE_TODO,
  SET_TODOS,
} from "./action-types";
import axios from "axios";

export const deleteTodo = (i) => {
  return {
    type: DELETE_TODO,
    deleteIndx: i,
  };
};

export function editTodo(obj) {
  return {
    type: SET_EDIT_TODO,
    editTodoObj: obj,
  };
}

export function addOrEditTodo(obj) {
  return {
    type: ADD_OR_EDIT_TODO,
    activeTodoObj: obj,
  };
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos: todos,
  };
}

export function fetchTodos() {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/getTodos")
      .then((res) => dispatch(setTodos(res.data.data)))
      .catch((err) => console.log(err));
  };
}
