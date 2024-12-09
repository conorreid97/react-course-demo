import { useState } from 'react';
import UserCard from './UserCard';

const ListComponent = () => {
    // Pair of empty brackets indicate that we start with an empty list
    const [users, setUsers ] = useState([
        {
            username: 'Conor',
            name: 'Conor Reid',
            phone: '12345',
            email: 'con@gmail.com'
        },
        {
            username: 'Carrie',
            name: 'Carrie Mackie',
            phone: '1231232',
            email: 'car@gmail.com'
        },
        {
            username: 'Cameron',
            name: 'Cameron Jamieson',
            phone: '456456',
            email: 'cam@gmail.com'
        }
    ]);

    return (
        <div>
            <h1>Display all users</h1>

            {/* <table>
                <thead>
                    <tr>
                        <td>UserName</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => 
                            <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table> */}

            {/* Option 2 */}
            {
                users.map(user => 
                <UserCard key={user.username} user={user} />)
            }
        </div>
    )
}

export default ListComponent;