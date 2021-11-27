import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from './components/Home'

import './index.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/html-css'>
                    HTML/CSS
                </Route>
                <Route exact path='/javascript'>
                    JAVASCRIPT
                </Route>
                <Route exact path='/php'>
                    PHP
                </Route>
                <Route exact path='/projets'>
                    PROJETS
                </Route>
                <Route exact path='*'>
                    ERREUR
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))