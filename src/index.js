import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { StateContextProvider } from './contexts/StateContextProvider';
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
   <StateContextProvider>
      <Router>
       <App />
      </Router>
   </StateContextProvider>,
    document.getElementById('root')
);
    