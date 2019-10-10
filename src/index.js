//imports react into project
import React from 'react';
import ReactDOM from 'react-dom';
//Redux/Sagas/Necessary Middleware
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware(); //connects Sagas to redux store

// logger will only be added if you're in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to project including saga and logger
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga); // tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'), // Provider wraps around the whole App
  // so that we can access the store (large object) from anywhere in the app
);