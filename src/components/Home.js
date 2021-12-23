import React from 'react'
import { Link } from 'react-router-dom'

import { pages } from '../index'

export const Home = () => {

    React.useEffect(() => {
        document.querySelector("link[rel='icon']")
                .setAttribute("href", `${process.env.PUBLIC_URL}/favicons/binder.svg`)
        document.querySelector("meta[name='description']")
                .setAttribute("content", 'Portfolio des exercices et projets réalisés dans le cadre de la formation DesCodeuses.')
        document.querySelector("title").textContent = 'Portfolio DesCodeuses'
    }, []) // eslint-disable-line
    
    return (
        <div className='home'>
            <h1>PORTFOLIO @DESCODEUSES</h1>
            <div className='home_card_row'>
                {pages.map((page, idx) => <LinkCard {...{path: page.path, pagename: page.props.pagename}} key={`link_${idx}`}/>)}
            </div>
        </div>
    )
}

const LinkCard = ({path, pagename}) => {
    return <Link to={path} className='home_card_block'>{pagename}</Link>
}