import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import MovieQuotes from './movie_quotes';
import SignIn from './sign_in';
import SignUp from './sign_up';


const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route path='/' exact component={Home} />
            <Route path='/movie-quotes' component={MovieQuotes} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
        </div>
    </div>
);

export default App;
