import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <div className='error_page'>
            <p>Il n'y a rien par ici...</p>
            <Link to='/' className='error_link'>Aller à l'accueil</Link>
        </div>
    )
}