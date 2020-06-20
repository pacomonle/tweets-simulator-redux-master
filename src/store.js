// crear store
import { createStore } from "redux";
// import del reducer
import reducer from "./reducers";
// import localstorage
import {
  getStateLocalStoraga,
  setStateLocalStorage
} from "./utils/localStorage";

const localStorageState = getStateLocalStoraga();

const store = createStore(
  reducer,
  localStorageState,
  // para instalar react developer tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// guardar store en localstorage
store.subscribe(() => {
  
  setStateLocalStorage({
    tweets: store.getState().tweets
  });
});

export default store;
