import { combineReducers } from "redux";
import { showCharacters } from "./characters";

const rootReducer = combineReducers({
  character: showCharacters
});

export default rootReducer;
