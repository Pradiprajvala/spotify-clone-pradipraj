import React from 'react';
import ReactDOM from 'react-dom/';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { DataLayer } from './DataLayer';
import './index.css'
import reducer,{ defaultState } from './reducer';



  ReactDOM.render(
  <React.StrictMode>
    <DataLayer defaultState={defaultState} reducer={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>,document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
