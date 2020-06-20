// combine reducers
import { combineReducers } from "redux";
// reducers
import modalsReducer from "./modalsReducer";
import validationsReducer from "./validationsReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  modals: modalsReducer,
  validations: validationsReducer,
  tweets: tweetsReducer
});
