import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

