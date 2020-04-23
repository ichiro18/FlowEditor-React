import { RootAction, RootState, Services } from "MyTypes";
import { createEpicMiddleware } from "redux-observable";
import services from "../services";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

const middlewares = [epicMiddleware];
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

const store = createStore(rootReducer, initialState, enhancer);

export default store;
