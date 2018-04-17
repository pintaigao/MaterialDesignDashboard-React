import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import baseWebReducers from "../reducers/basicWebReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      baseWeb: baseWeb
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};