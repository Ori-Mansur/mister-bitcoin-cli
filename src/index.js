import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
