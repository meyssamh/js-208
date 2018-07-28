import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Pages/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
