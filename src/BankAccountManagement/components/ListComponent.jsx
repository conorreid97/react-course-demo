import { useState } from 'react';
import CustomerCard from './CustomerCard';
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
    const navigate = useNavigate();
    // Pair of empty brackets indicate that we start with an empty list
    const [customers, setCustomers ] = useState([
        {
            customerId: '1',
            name: 'Conor Reid',
            address: '137 Binniehill road Cumbernauld Glasgow G689DT Scotland',
            customerType: 'Person'
        },
        {
            customerId: '2',
            name: 'Carrie Mackie',
            address: '9 Yeamans lane Dundee DD23EJ Scotland',
            customerType: 'Person'
        },
        {
            customerId: '3',
            name: 'Cameron Jamieson',
            address: '10 Victoria road Dundee DD22PE Scotland',
            customerType: 'Person'
        }
    ]);

    const updateCustomer = (customerId) => {
        navigate(`/update-customer/${customerId}`)
    };

    const deleteCustomer = (customerId) => {
        if (window.confirm("Are you sure you want to delete this account?")) {
        
        }
    };

    return (
        <div>
           

            {/* Option 2 */}
            {
                customers.map(customer => 
                <CustomerCard 
                key={customer.customerId} 
                customer={customer} 
                onUpdate={updateCustomer}
                onDelete={deleteCustomer}
                />)
            }
        </div>
    )
}

export default ListComponent;