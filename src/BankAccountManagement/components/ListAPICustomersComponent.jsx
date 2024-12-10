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

    useEffect(() => {
        loadCustomers();
    }, [])

    return (
        <div>
            {
                customers.map(customer =>
                    <CustomerCard key={customer.customerId} customer={customer} />)
            }
        </div>
    )
}

export default ListAPICustomersComponent;