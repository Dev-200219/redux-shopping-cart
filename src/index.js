import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './Redux/reducers';

let cartStore = createStore(reducer);

ReactDOM.render(
    <Provider store={cartStore}>
        <App />
    </Provider>,  document.getElementById('root')
);
