import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./todoReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const store = createStore(todoReducer, applyMiddleware(logger, thunk));

export default store;
