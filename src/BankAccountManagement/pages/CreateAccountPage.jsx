import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Form.css";

const CreateAccountPage = () => {
    const navigate = useNavigate();
    const api = "http://localhost:8080/api/v1/accounts";

    const [formData, setFormData] = useState({
        balance: "",
        interestRate: "",
        accountType: "",
        customerId: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(api, formData)
            .then(() => {
                alert("Account created successfully!");
                navigate("/accounts");
            })
            .catch((error) => console.error("Error creating account:", error));
    };

    return (
        <div className="center-container">
            <h1>Create Account</h1>
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
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="number"
                        name="customerId"
                        value={formData.customerId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn-primary" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateAccountPage;