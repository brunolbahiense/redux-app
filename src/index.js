import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes';

import { Provider } from 'react-redux'; 
import store from './redux/store' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MainRoutes />
      </Router>
    </Provider>
  </React.StrictMode>
);

