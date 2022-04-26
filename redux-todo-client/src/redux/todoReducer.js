import { SET_EDIT_TODO, ADD_OR_EDIT_TODO, DELETE_TODO , SET_TODOS } from "./action-types";

const defaultEditTodoObj = { text: "", index: -1 };

const initialState = {
  todos: [],
  activeTodoObj: defaultEditTodoObj,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      const updatedTodos = state.todos.filter(
        (todo, i) => i !== action.deleteIndx
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    case SET_EDIT_TODO:
      return {
        ...state,
        activeTodoObj: action.editTodoObj,
      };
    case ADD_OR_EDIT_TODO:
      if (action.activeTodoObj.index === -1) {
        return {
          ...state,
          todos: [...state.todos, action.activeTodoObj.text],
          activeTodoObj: defaultEditTodoObj,
        };
      } else {
        state.todos[action.activeTodoObj.index] = action.activeTodoObj.text;
        return {
          ...state,
          todos: [...state.todos],
          activeTodoObj: defaultEditTodoObj,
        };
      }
    case "SET_TODOS":
      return {
        ...state,
        todos: [...action.todos],
      };
    default:
      return state;
  }
};
