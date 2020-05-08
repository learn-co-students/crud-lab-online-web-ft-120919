import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant, window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
