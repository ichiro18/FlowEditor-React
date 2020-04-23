import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { loadGraphAsync } from "./actions";

const reducer = combineReducers({
  graph: createReducer({} as any).handleAction(
    [loadGraphAsync.success],
    (state, action) => action.payload
  ),
});

export default reducer;
