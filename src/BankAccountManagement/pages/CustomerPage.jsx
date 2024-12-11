import '../styles/CustomerPage.css';
import { Link } from 'react-router-dom';
import ListComponent from "../components/ListComponent";
import ListAPICustomersComponent from "../components/ListAPICustomersComponent"

const CustomerPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Customer Management Page</h1>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-customer">Create Customer</Link></li>
                        <li><Link to="/find-by-id">Find Account By ID</Link></li>
                    </ul>
                </nav>
            </aside> 
            <div className='center-container'>
                <h1>Display all customers</h1>
                <ListAPICustomersComponent />
            </div>
        </div>
    )
}

export default CustomerPage;
