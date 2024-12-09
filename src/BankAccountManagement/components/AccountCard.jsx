import '../styles/AccountCard.css';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const AccountCard = ({ account, onDelete }) => {
    const { accountId, balance, customerId, interestRate, accountType } = account;
    const navigate = useNavigate();

    return (
        <div className="account-card">
            <h3>Account ID: {accountId}</h3>
            <p>Balance: {balance}</p>
            <p>Customer ID: {customerId}</p>
            <p>Interest Rate: {interestRate}</p>
            <p>Type: {accountType}</p>
            <div className="buttons">
                <button
                    className="btn-primary"
                    onClick={() => navigate(`/update-account/${accountId}`)}
                >
                    Update
                </button>
                <button className="btn-danger" onClick={() => onDelete(accountId)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AccountCard;