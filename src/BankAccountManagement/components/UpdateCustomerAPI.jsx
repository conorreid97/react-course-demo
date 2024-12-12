import "../styles/Form.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCustomerAPI = () => {
    const { customerId } = useParams();
    const navigate = useNavigate();
    const api = "http://localhost:8080/api/v1/customers";

    const [formData, setFormData] = useState({
        name: "",
        address: {
            streetNumber: "",
            city: "",
            province: "",
            postalCode: "",
        },
        customerType: "",
    });

    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        axios
            .get(`${api}/${customerId}`)
            .then((response) => setFormData(response.data))
            .catch((error) => {
                console.error("Error fetching customer data:", error);
                setError("Failed to fetch account details. Please try again later.");
            });
        }, [customerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle changes for nested address fields
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            address: { ...formData.address, [name]: value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null); // Clear any previous error

        axios
            .put(`${api}/${customerId}`, formData)
            .then(() => {
                alert("Customer updated successfully!");
                navigate("/customers");
            })
            .catch((error) => {
                console.error("Error updating customer:", error);
                setError("Failed to update account. Please check your input and try again.");
            });
    };
    
    
    return(
        <div className="form-center-container">
            <h1>Update Customer</h1>

             {/* Display error message if any */}
             {error && <p className="error-message">{error}</p>}

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
                    <label>Street Number:</label>
                    <input
                        type="text"
                        name="streetNumber"
                        value={formData.address.streetNumber}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.address.city}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div>
                    <label>Province:</label>
                    <input
                        type="text"
                        name="province"
                        value={formData.address.province}
                        onChange={handleAddressChange}
                        required
                    />
                </div>
                <div>
                    <label>Postal Code:</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.address.postalCode}
                        onChange={handleAddressChange}
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateCustomerAPI;