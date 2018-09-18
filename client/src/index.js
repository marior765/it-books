import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';

import reducer from './reducers/Main';
import App from './components/App';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));