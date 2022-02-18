import { combineReducers } from "redux";
import quotesReducer from "./quotesReducer";

const rootReducer = combineReducers({
  quotesReducer: quotesReducer,
});

export default rootReducer;
