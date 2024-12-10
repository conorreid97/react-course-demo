import { useState } from 'react';
import CustomerCard from './CustomerCard';
import axios from 'axios';
import { useEffect } from 'react'

const ListAPICustomersComponent = () => {
    const api = 'http://localhost:8080/api/v1/customers'
    const [customers, setCustomers] = useState([]);

    const loadCustomers = () => {
        axios
        .get(api)
        .then(response => {
            setCustomers(response.data)
            console.log('Customers not found')
        })
        .catch(error => console.log('Unable to retrieve list of users from API'));
    }

    // Delete a customer by ID
    const deleteCustomer = (customerId) => {
        if (window.confirm("Are you sure you want to delete this account")){
            axios
            .delete(`${api}/${customerId}`)
            .then(() => {
                alert("Account deleted successfully!");
                loadCustomers(); // Reload customer after deletion
            })
            .catch((error) => console.error("Error deleting customer:", error));
        }
    };

    useEffect(() => {
        loadCustomers();
    }, [])

    return (
        <div>
            { customers.map(customer => (
                <CustomerCard 
                    key={customer.customerId} 
                    customer={customer} 
                    onDelete={deleteCustomer} 
                />
            ))}
        </div>
    );
};

export default ListAPICustomersComponent;