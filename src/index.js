import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Components/App';
import reducer from "./reducer";
import { addComment } from './actions';
import { createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import DevTools from './DevTools';

const logger = createLogger();
const store = createStore(
  reducer,
  DevTools.instrument()
);
// props store={store} - taki zapis oznacza, że do props.store przypisujemy zawartość zmiennej store
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
// PROVIDER to komponent REACTOWY, dzięki któremu store jest widoczny przy każdym użyciu metody connect - 
// bez niego React Redux nie wie z jakiego źródła ma czerpać dane. 
// MUSIMY więc opakować komponent App w komponent Provider.

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
// !! --Dispatchowanie, czyli wysyłanie informacji o akcji do store
