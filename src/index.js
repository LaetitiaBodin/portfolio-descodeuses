import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { ErrorPage } from './components/ErrorPage'
import { HTML_CSS } from './components/Page_HTML_CSS'
import { Javascript } from './components/Page_Javascript'
import { PHP } from './components/Page_PHP'
import { Projets } from './components/Page_Projets'

import './index.css'

const App = () => {
    const isScreenSmall = window.innerWidth <= 576 ? true : false
    const [smallScreen, setSmallScreen] = React.useState(isScreenSmall)

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth <= 576
                ?   setSmallScreen(true)
                :   setSmallScreen(false)
        })
    }, [])
    
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/html-css'>
                    <HTML_CSS {...{smallScreen}}/>
                </Route>
                <Route exact path='/javascript'>
                    <Javascript {...{smallScreen}}/>
                </Route>
                <Route exact path='/php'>
                    <PHP {...{smallScreen}}/>
                </Route>
                <Route exact path='/projets'>
                    <Projets {...{smallScreen}}/>
                </Route>
                <Route exact path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))