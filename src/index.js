import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import foodReducer, {}

const store = createStore();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

