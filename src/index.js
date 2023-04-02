import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App/App"
import "./index.css"

// PROVIDER
import PROVIDER from './Context/State';

ReactDOM.render(
    <PROVIDER>
    <App/>
    </PROVIDER>,
    document.querySelector("#root")
)