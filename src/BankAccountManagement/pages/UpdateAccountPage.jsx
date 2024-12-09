import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateAccountPage = () => {
    const { accountId } = useParams();
    const navigate = useNavigate();
    const api = "http://localhost:8080/api/v1/accounts";

    const [formData, setFormData] = useState({
        balance: "",
        interestRate: "",
        accountType: "",
    });

    // Load the current account data
    useEffect(() => {
        axios
            .get(`${api}/${accountId}`)
            .then((response) => setFormData(response.data))
            .catch((error) => console.error("Error fetching account:", error));
    }, [accountId]);

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit the updated data
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`${api}/${accountId}`, formData)
            .then(() => {
                alert("Account updated successfully!");
                navigate("/accounts");
            })
            .catch((error) => console.error("Error updating account:", error));
    };

    return (
        <div className="center-container">
            <h1>Update Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Balance:</label>
                    <input
                        type="number"
                        name="balance"
                        value={formData.balance}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Interest Rate:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="interestRate"
                        value={formData.interestRate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Account Type:</label>
                    <input
                        type="text"
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn-primary" type="submit">
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateAccountPage;