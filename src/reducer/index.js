import resultReducer from "./counter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  resultReducer: resultReducer,
});

export default allReducers;
