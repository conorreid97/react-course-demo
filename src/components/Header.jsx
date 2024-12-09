import '../styles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <header>

                <Link to='/' className='company-banner'>FDM</Link>
                <Link to='/join-us'>Join Us</Link>
                <Link to='/daily-feed'>Daily Feed</Link>
                <Link to='/props'>Props</Link>
                <Link to='/state'>State</Link>
                <Link to='/login'>Login</Link>
                <Link to='/conditionals'>Conditionals</Link>
                <Link to='/loops'>Loops</Link>
                <Link to='/api-list-all'>Get All Users (API)</Link>
                <Link to='/add-user'>Add User (API)</Link>
            </header>
        </div>
    )
}

export default Header;