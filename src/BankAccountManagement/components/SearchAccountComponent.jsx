import { useState } from "react";
import axios from "axios";
import "../styles/SearchPage.css";

const SearchAccountComponent = () => {
    const [accountId, setAccountId] = useState("");
    const [account, setAccount] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    const apiAccounts = "http://localhost:8080/api/v1/accounts";
    const apiCustomer = "http://localhost:8080/api/v1/customers";

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setAccount(null);
        setCustomer(null);

        try {
            // Fetch the account by ID
            const accountResponse = await axios.get(`${apiAccounts}/${accountId}`);
            setAccount(accountResponse.data);

            // Fetch the customer for the account
            const customerResponse = await axios.get(`${apiCustomer}/${accountResponse.data.customerId}`);
            setCustomer(customerResponse.data);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Account not found or error fetching customer data.");
        }
    };
    return (
        <div className="search-page-container">
        <h1>Search Account and Customer</h1>
        <form onSubmit={handleSearch} className="search-form">
            <label htmlFor="accountId">Account ID:</label>
            <input
                id="accountId"
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                placeholder="Enter Account ID"
                required
            />
            <button type="submit">Search</button>
        </form>

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

export default SearchAccountComponent;
