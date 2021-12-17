import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import '../src/styles/main.scss';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// reportWebVitals();
