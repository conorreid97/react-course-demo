import { useState } from "react";
import axios from "axios";
import "../styles/SearchPage.css";

const FindByCityAPI = () => {
    const [city, setCity] = useState("");
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState(null);

    const apiEndpoint = "http://localhost:8080/api/v1/customers/by-city";

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setAccounts([]);

        try {
            // Fetch accounts by city
            const response = await axios.get(`${apiEndpoint}?city=${encodeURIComponent(city)}`);
            setAccounts(response.data);
        } catch (err) {
            console.error("Error fetching accounts:", err);
            setError("Error fetching accounts. Please check the city name and try again.");
        }
    };

    return (
        <div className="search-page-container">
            <h1>Find Accounts By City</h1>
            <form onSubmit={handleSearch} className="search-form">
                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {accounts.length > 0 && (
                <div className="accounts-list">
                    <h2>Accounts in {city}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Account ID</th>
                                <th>Balance</th>
                                <th>Interest Rate</th>
                                <th>Account Type</th>
                                <th>Customer ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.accountId}>
                                    <td>{account.accountId}</td>
                                    <td>{account.balance}</td>
                                    <td>{account.interestRate}</td>
                                    <td>{account.accountType}</td>
                                    <td>{account.customerId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FindByCityAPI;