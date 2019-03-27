import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import mainContentBackgroundReducer from './reducers/mainContentBackground-Reducer.js';
import mainContentReducer from './reducers/mainContent-Reducer.js';



const allReducers = combineReducers({
    mainContent: mainContentReducer, 
    mainContentBackground: mainContentBackgroundReducer
});

const store = createStore(
    allReducers,
    {
        mainContent:'About',
        mainContentBackground:'red'
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
