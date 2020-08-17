import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const UserContext = createContext()

ReactDOM.render(
      <UserContext.Provider value={{username:'Kash'}}>
    <Router >
      <App />
    </Router>
      </UserContext.Provider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
