import '../styles/CustomerPage.css';
import { Link } from 'react-router-dom';
import ListAPICustomersComponent from "../components/ListAPICustomersComponent"
import CustomerSidebarComponent from "../components/CustomerSidebarComponent"

const CustomerPage = () => {
    return (
        <div>
            <h1 className="welcome-text">Welcome to the Customer Management Page</h1>
            <CustomerSidebarComponent /> 
            <div className='center-container'>
                <h1>Display all customers</h1>
                <ListAPICustomersComponent />
            </div>
        </div>
    )
}

export default CustomerPage;
