import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import rootReducer from './reducers';
import sagas from './sagas';
import App from './containers/App';
import HomePage from './containers/HomePage';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

const history = createHistory();
render(
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ HomePage } />
        </Switch>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root'),
);