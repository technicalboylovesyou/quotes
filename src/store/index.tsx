import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

const store = configureStore();

export default store;
