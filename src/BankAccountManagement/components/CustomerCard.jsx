import '../styles/CustomerCard.css';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const CustomerCard = ({ customer, onUpdate, onDelete}) => {
    const { customerId, name, address, customerType } = customer;
    const navigate = useNavigate();

    return (
        <div className='customer-card-main'>
            <h3>Customer ID: {customerId}</h3>
            <p>Name: {name}</p>
            <p> 
                Address: {address.streetNumber}, {address.city}, {address.province} {address.postalCode}
            </p>
            <p>Type: {customerType}</p>
            <button className="btn-primary" onClick={() => onUpdate(customerId)}>Update</button>
            <button className="btn-danger" onClick={() => onDelete(customerId)}>Delete</button>
        </div>
    );
};

CustomerCard.propTypes = {
    customer: PropTypes.shape({
        customerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        customerType: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default CustomerCard;