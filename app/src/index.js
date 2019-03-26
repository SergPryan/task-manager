import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './commons/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/root.reducer'
import rootSaga from './sagas/root.saga'
import Provider from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
