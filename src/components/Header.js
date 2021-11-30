import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({page, smallScreen}) => {
    return smallScreen ? <NavbarS {...{page}} /> : <NavbarL {...{page}} />
}

const NavbarS = ({page}) => {
    
    const [navOpen, setNavOpen] = React.useState(false)
    const navClass = navOpen ? 'nav_s_open' : 'nav_s_close'
    const toggleNav = () => navOpen ? setNavOpen(false) : setNavOpen(true)

    const icon = navOpen
        ?   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 36">
                <polygon points="3.38 18 12.38 0 12.38 36 3.38 18"/>
            </svg>
        :   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 36">
                <polygon points="14.63 18 5.63 36 5.63 0 14.63 18"/>
            </svg>

    return (
        <div className={`header header_s ${navClass}`}>
            <div className='nav_s'>
                <Navbar {...{page}}/>
            </div>
            <div onClick={toggleNav} className='nav_s_tip'>{icon}</div>
        </div>
    )
}

const NavbarL = ({page}) => {
    return (
        <div className='header header_l'>
            <Navbar {...{page}}/>
        </div>
    )
}

const Navbar = ({page}) => {

    const pages = [
        {name: 'HTML / CSS', link: '/html-css'},
        {name: 'JAVASCRIPT', link: '/javascript'},
        {name: 'PHP', link: '/php'},
        {name: 'PROJETS', link: '/projets'},

    ]

    let links = []
    for (let i = 0; i < pages.length; i++) {
        let classLink =  i === page ? 'current' : ''   
        links.push(
            <li key={`navLink_${i}`}>
                <Link to={pages[i].link} className={classLink}>{pages[i].name}</Link>
            </li>
        )
    }

    return (
        <>
        <Link to='/' className='title'>PORTFOLIO @DESCODEUSES</Link>
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </>
    )
}
