import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { ErrorPage } from './components/ErrorPage'
import { Page } from './components/Page'

import html_css from './data/html_css.json'
import javascript from './data/javascript.json'
import php from './data/php.json'
import projets from './data/projets.json'

import './index.css'

export const pages = [
    {
        path: '/html-css',
        props: {
            img: 'html-css.svg',
            title: 'Exercices HTML / CSS',
            desc: 'Portfolio des exercices HTML / CSS réalisés dans le cadre de la formation DesCodeuses.',
            page: 0,
            pagename: 'HTML / CSS',
            folder : 'html-css',
            listname: html_css
        }
    },
    {
        path: '/javascript',
        props: {
            img: 'javascript.svg',
            title: 'Exercices Javascript',
            desc: 'Portfolio des exercices Javascript réalisés dans le cadre de la formation DesCodeuses.',
            page: 1,
            pagename: 'JAVASCRIPT',
            folder : 'javascript',
            listname: javascript
        }
    },
    {
        path: '/php',
        props: {
            img: 'php.svg',
            title: 'Exercices PHP',
            desc: 'Portfolio des exercices PHP réalisés dans le cadre de la formation DesCodeuses.',
            page: 2,
            pagename: 'PHP',
            folder : 'php',
            listname: php
        }
    },
    {
        path: '/projets',
        props: {
            img: 'world-wide-web.svg',
            title: 'Projets',
            desc: 'Portfolio des projets réalisés dans le cadre de la formation DesCodeuses.',
            page: 3,
            pagename: 'PROJETS',
            folder : 'projets',
            listname: projets
        }
    }
]

const App = () => {
    const isScreenSmall = window.innerWidth <= 576 ? true : false
    const [smallScreen, setSmallScreen] = React.useState(isScreenSmall)

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth <= 576 ? setSmallScreen(true) : setSmallScreen(false)
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                {
                    pages.map((page, idx) => 
                        <Route exact path={page.path} key={`route_${idx}`}>
                            <Page {...{...page.props, smallScreen}}/>
                        </Route>)
                }
                <Route exact path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))