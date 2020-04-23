import { combineReducers } from "redux";

import flowchart from "../features/flowchart/reducer";

const rootReducer = combineReducers({
  flowchart,
});

export default rootReducer;
