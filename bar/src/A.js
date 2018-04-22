import React from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg'

export default () => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div>
            <p className="App-intro">
            Route A or <Link to="routeB">Route B?</Link>
            </p>
        </div>
        </header>
    </div>
)
