import { combineReducers, createStore } from "redux";
import rootReducer, { exampleInitialState } from "./redux/indexReducer";

const configureStore = (initialState = exampleInitialState) => {
  const store = createStore(combineReducers(rootReducer), initialState);

  return store;
};

export default configureStore();
