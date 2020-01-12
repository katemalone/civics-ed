import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './Reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);