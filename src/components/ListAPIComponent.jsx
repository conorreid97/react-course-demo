import { useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import { useEffect } from 'react';

const ListAPIComponent = () => {
    const api = 'http://localhost:8080/api/v1/user'
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        // Option 1: Without Logging
        // axios
        // .get(api)
        // .then(response => setUsers(response.data))
        // .catch(error => console.log(error));

        // Options 2: With Logging
        axios
        .get(api)
        .then(response => {
            setUsers(response.data)
            console.log('Users found')

        }) // if the request is successful
        .catch(error => console.log('Unable to retrieve list of users from API.'));
    }

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <div>
            {
                users.map(user => 
                    <UserCard key={user.username} user={user} />)
            }
            
        </div>
    )
}

export default ListAPIComponent;