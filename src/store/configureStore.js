import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "./reducers/root"

const rootReducer = combineReducers({
    root: reducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;