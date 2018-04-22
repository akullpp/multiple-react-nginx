import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';
import './styles.css';
import A from './A';
import B from './B';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/">
                <Redirect to="routeA" />
            </Route>
            <Route path="/routeA" component={A} />
            <Route path="/routeB" component={B} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
