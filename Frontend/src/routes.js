import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //BrowserRouter >> ele é o roteador basico de páginas

import Logon from './pages/Logon';
import Register from './pages/Register'; // calls index.js and styles.css by default
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

// When you have more than one page, it is a good idea create Router in order to organize your code
// 1º Import every page as I made above
// 2º To create the route: Add the browser router in order to create a foundation
// 3º Add Switch to secure that each route be executed per cycle
// 4º In every new route just call <Route path="/ ROUTE NAME " component = { NAME IMPORTED }

// IMPORTANT TIP!!: On your main page (or root) the route will be '/', so use the clause "exact" like below. Otherwise the react will understand every other webpage as '/'

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}