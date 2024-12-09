import { useState, useEffect } from "react";
import AccountCard from "./AccountCard";
import axios from "axios";

const ListAccountsComponent = () => {
    const [accounts, setAccounts] = useState([]);
    const api = "http://localhost:8080/api/v1/accounts";

    // Load accounts from API
    const loadAccounts = () => {
        axios
            .get(api)
            .then((response) => setAccounts(response.data))
            .catch((error) => console.error("Error fetching accounts:", error));
    };

    // Delete an account by ID
    const deleteAccount = (accountId) => {
        if (window.confirm("Are you sure you want to delete this account?")) {
            axios
                .delete(`${api}/${accountId}`)
                .then(() => {
                    alert("Account deleted successfully!");
                    loadAccounts(); // Reload accounts after deletion
                })
                .catch((error) => console.error("Error deleting account:", error));
        }
    };

    useEffect(() => {
        loadAccounts();
    }, []);

    return (
        <div>
            {accounts.map((account) => (
                <AccountCard
                    key={account.accountId}
                    account={account}
                    onDelete={deleteAccount}
                />
            ))}
        </div>
    );
};

export default ListAccountsComponent;