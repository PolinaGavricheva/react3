import {BrowserRouter} from "react-router-dom";
import store from './Redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

