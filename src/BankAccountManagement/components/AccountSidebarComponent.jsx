import "../styles/Sidebar.css";
import { Link } from 'react-router-dom';

const AccountSidebarComponent = () => {
    return (
        <div>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-account">Create Account</Link></li>
                        <li><Link to="/find-account-by-id">Find Account By ID</Link></li>
                        <li><Link to="/find-account-by-city">Find Account By City</Link></li>
                    </ul>
                </nav>
            </aside> 
        </div>
        
    )
}

export default AccountSidebarComponent;