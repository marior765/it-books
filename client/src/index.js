import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';

ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));