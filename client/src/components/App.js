import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage/index';
import Footer from './Footer';
import './index.scss';
import Books from './Books/Books';

const App = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/books" component={Books} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;