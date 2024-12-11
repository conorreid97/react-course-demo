import "../styles/Sidebar.css";
import { Link } from 'react-router-dom';

const CustomerPage = () => {
    return (
        <div>
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/create-customer">Create Customer</Link></li>
                        <li><Link to="/find-by-id">Find Account By ID</Link></li>
                    </ul>
                </nav>
            </aside> 
           
        </div>
    )
}

export default CustomerPage;