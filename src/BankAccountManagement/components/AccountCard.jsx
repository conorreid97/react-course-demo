import '../styles/AccountCard.css';
import PropTypes from 'prop-types';

const AccountCard = (props) => {
    const { accountId, balance, customerId, interestRate, accountType } = props.account;
    const { onUpdate, onDelete } = props;

    return (
        <div className='account-card'>
            <h3>Account ID: {accountId}</h3>
            <p>Balance: £{balance}</p>
            <p>Customer ID: {customerId}</p>
            <p>Interest Rate: {interestRate}</p>
            <p>Type: {accountType}</p>
            <button className="btn-primary" onClick={() => onUpdate(customerId)}>Update</button>
            <button className="btn-danger" onClick={() => onDelete(customerId)}>Delete</button>
        </div>
    );
};

AccountCard.propTypes = {
    account: PropTypes.shape({
        accountId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        Balance: PropTypes.number.isRequired,
        customerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        customerType: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AccountCard;