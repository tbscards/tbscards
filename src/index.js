import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import './fonts/Linotype - ITC Honda.ttf'
import './fonts/value-bold.ttf'
import './fonts/value-regular.ttf'
import './index.css'

// import { getAllCards } from './store/actions/product';

const store = configureStore();

// store.dispatch(getAllCards());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
document.getElementById('root'));
