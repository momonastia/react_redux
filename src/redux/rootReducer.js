import { combineReducers } from "redux";
import { likesReducer } from "./reducer";

export const rootReducer = combineReducers({
  likesReducer,
});
