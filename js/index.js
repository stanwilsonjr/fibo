import React from 'react';
import ReactDOM from 'react-dom';
import { install } from 'ga-gtag';
import App from './app';

install(process.env.GOOGLE_ANALYTICS);
ReactDOM.render(
    <App />,
  document.getElementById('app')
);