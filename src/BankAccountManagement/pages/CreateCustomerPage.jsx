import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCustomerPage = () => {
    const navigate = useNavigate();
    const api = "http://localhost:8080/api/v1/customers";

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        customerType: "",
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
                alert("Customer created successfully!");
                navigate("/customers");
            })
            .catch((error) => console.error("Error creating customer:", error));
    };

    return (
        <div className="center-container">
            <h1>Create Customer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Customer Type:</label>
                    <input
                        type="text"
                        name="customerType"
                        value={formData.customerType}
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

export default CreateCustomerPage;