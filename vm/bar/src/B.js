import React from 'react';
import { Route, Link } from 'react-router-dom'

import logo from './logo.svg'

export default ({ match }) => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div>
            <p className="App-intro">
            Route B or <Link to="/routeA">Route A?</Link>
            </p>
        </div>
        </header>
        <p>
            <Link to={`${match.url}/1`} style={{marginRight: '1em'}}>Select 1</Link>
            <Link to={`${match.url}/2`} style={{marginRight: '1em'}}>Select 2</Link>
            <Link to={`${match.url}/3`}>Select 3</Link>
        </p>
        <Route path={`${match.url}/:id`} component={Selection} />
    </div>
)

const Selection = ({ match }) => (
    <div>
        <h3>Selected {match.params.id}</h3>
    </div>
)
