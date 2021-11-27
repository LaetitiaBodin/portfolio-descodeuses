import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { ErrorPage } from './components/ErrorPage'

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
                <Route exact path='*' component={ErrorPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))