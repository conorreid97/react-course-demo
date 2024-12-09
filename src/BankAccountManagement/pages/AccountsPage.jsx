import '../styles/AccountPage.css';
import { Link } from 'react-router-dom';
import ListAccountsComponent from "../components/ListAccountsComponent";

const AccountsPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Account Management Page</h1>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-account">Create Account</Link></li>
                    </ul>
                </nav>
            </aside> 
            <div className='center-container'>
                <h1>Display all accounts</h1>
                
                <ListAccountsComponent />
            </div>
            
        </div>
    )
}

export default AccountsPage;