import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home'>
            <h1>PORTFOLIO @DESCODEUSES</h1>
            <div className='home_card_row'>
                    <LinkCard {...{page: 'html-css', name: 'HTML / CSS'}}/>
                    <LinkCard {...{page: 'javascript', name: 'JAVASCRIPT'}}/>
                    <LinkCard {...{page: 'php', name: 'PHP'}}/>
                    <LinkCard {...{page: 'projets', name: 'PROJETS'}}/>
            </div>
        </div>
    )
}

const LinkCard = ({page, name}) => {
    return <Link to={page} className='home_card_block'>{name}</Link>
}