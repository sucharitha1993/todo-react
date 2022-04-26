import { SET_EDIT_TODO, ADD_OR_EDIT_TODO, DELETE_TODO } from "./action-types";

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
