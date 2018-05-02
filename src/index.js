import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
//attampt to implement history
import history from './history';

ReactDOM.render(
  
  <Provider store={ store }>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
  
  , 
document.getElementById('root')
);
registerServiceWorker();
