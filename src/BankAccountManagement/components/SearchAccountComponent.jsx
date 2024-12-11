import { useState } from "react";
import "../styles/SearchPage.css";
import SearchAccountComponent from "./SearchAccountComponent";

const SearchAccountPage = () => {
    const [account, setAccount] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div className="search-page-container">
            <h1>Search Account and Customer</h1>
            <SearchAccountComponent
                onAccountFound={setAccount}
                onCustomerFound={setCustomer}
                onError={setError}
            />

            {error && <p className="error-message">{error}</p>}

            {account && (
                <div className="account-details">
                    <h2>Account Details</h2>
                    <p><strong>Account ID:</strong> {account.accountId}</p>
                    <p><strong>Balance:</strong> {account.balance}</p>
                    <p><strong>Interest Rate:</strong> {account.interestRate}</p>
                    <p><strong>Account Type:</strong> {account.accountType}</p>
                </div>
            )}

            {customer && (
                <div className="customer-details">
                    <h2>Customer Details</h2>
                    <p><strong>Name:</strong> {customer.name}</p>
                    <p><strong>Customer Type:</strong> {customer.customerType}</p>
                    <p><strong>Address:</strong> {customer.address.streetNumber}, {customer.address.city}, {customer.address.province} {customer.address.postalCode}</p>
                </div>
            )}
        </div>
    );
};

export default SearchAccountPage;
