import { useState } from "react";
import axios from "axios";
import "../styles/SearchPage.css";

const SearchCustomerPage = () => {
    const [customerId, setCustomerId] = useState("");
    const [customer, setCustomer] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);

    const apiCustomer = "http://localhost:8080/api/v1/customers";
    const apiAccounts = "http://localhost:8080/api/v1/accounts";

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setCustomer(null);
        setAccounts([]);

        try {
            // Fetch the customer by ID
            const customerResponse = await axios.get(`${apiCustomer}/${customerId}`);
            setCustomer(customerResponse.data);

            // Filter accounts for this specific customer
            const accountsResponse = await axios.get(`${apiAccounts}`);
            const filteredAccounts = accountsResponse.data.filter(
                (account) => account.customerId === parseInt(customerId)
            );
            setAccounts(filteredAccounts);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Customer not found or error fetching accounts.");
        }
    };

    return (
        <div className="search-page-container">
            <h1>Search Customer and Accounts</h1>
            <form onSubmit={handleSearch} className="search-form">
                <label htmlFor="customerId">Customer ID:</label>
                <input
                    id="customerId"
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    placeholder="Enter Customer ID"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {customer && (
                <div className="customer-details">
                    <h2>Customer Details</h2>
                    <p><strong>Name:</strong> {customer.name}</p>
                    <p><strong>Customer Type:</strong> {customer.customerType}</p>
                    <p><strong>Address:</strong> {customer.address.streetNumber}, {customer.address.city}, {customer.address.province} {customer.address.postalCode}</p>
                </div>
            )}

            {accounts.length > 0 && (
                <div className="accounts-list">
                    <h2>Accounts</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Account ID</th>
                                <th>Balance</th>
                                <th>Interest Rate</th>
                                <th>Account Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.accountId}>
                                    <td>{account.accountId}</td>
                                    <td>{account.balance}</td>
                                    <td>{account.interestRate}</td>
                                    <td>{account.accountType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SearchCustomerPage;