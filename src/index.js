// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {ThemeProvider} from '@livechat/ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Pages
import Main from './Pages/Main';

ReactDOM.render(<BrowserRouter><ThemeProvider><Main/></ThemeProvider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
