import '../styles/AccountPage.css';
import { Link } from 'react-router-dom';
import ListAPIAccountComponent from "../components/ListAPIAccountComponent"

const AccountsPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Account Management Page</h1>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-account">Create Account</Link></li>
                        <li><Link to="/find-account-by-id">Find Account By ID</Link></li>
                        <li><Link to="/find-account-by-city">Find Account By City</Link></li>
                    </ul>
                </nav>
            </aside> 
            <div className='center-container'>
                <h1>Display all accounts</h1>
                <ListAPIAccountComponent />
            </div>
            
        </div>
    )
}

export default AccountsPage;