import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";
import {store} from './store/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <ExchangeRate />
    </Provider>
    , document.getElementById("root")
);
