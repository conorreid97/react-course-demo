//import './src/styles/Header.css';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
const BankHeader = () => {
    return (
        <div>
            <header>

                <Link to='/' className='company-banner'>Bank of Conor</Link> 
                <Link to="/customers">Customer Page</Link> 
                <Link to="/accounts">Accounts Page</Link> 
            </header>
        </div>
    )
}

export default BankHeader;


