import '../styles/CustomerPage.css';
import { Link } from 'react-router-dom';
import ListComponent from "../components/ListComponent";

const CustomerPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Customer Management Page</h1>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-customer">Create Customer</Link></li>
                    </ul>
                </nav>
            </aside> 
            <div className='center-container'>
                <h1>Display all customers</h1>
                
                <ListComponent />
            </div>
            
        </div>
    )
}

export default CustomerPage;
