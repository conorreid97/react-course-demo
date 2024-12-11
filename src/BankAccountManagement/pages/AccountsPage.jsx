import '../styles/AccountPage.css';
import { Link } from 'react-router-dom';
import ListAPIAccountComponent from "../components/ListAPIAccountComponent"
import AccountSidebarComponent from '../components/AccountSidebarComponent';

const AccountsPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Account Management Page</h1>
            <AccountSidebarComponent />
            <div className='center-container'>
                <h1>Display all accounts</h1>
                <ListAPIAccountComponent />
            </div>
            
        </div>
    )
}

export default AccountsPage;