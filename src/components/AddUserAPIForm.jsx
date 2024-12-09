import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'



const AddUserAPIForm = () => {
    const api = 'http://localhost:8080/api/v1/user'
    const navigate = useNavigate();

    const [username, setUsername ] = useState('');
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');

    const submitHandler = (event) => {
    event.preventDefault();

        axios
        .post(api,
        {
            username: username,
            name: name,
            email: email,
            phone: phone
        })
        .then(response => {
            navigate('/api-list-all')
        })
        .catch(error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <lavel>Username: </lavel>
                <input name='username' type='text' value={username} 
                        onChange={event => setUsername(event.target.value)}/> <br />

                <label>Name: </label>
                <input name='name' type='text' value={name} 
                        onChange={event => setName(event.target.value)}/> <br />

                <label>Email: </label>
                <input name='email' type='text' value={email} 
                        onChange={event => setEmail(event.target.value)}/> <br />

                <label>Phone: </label>
                <input name='phone' type='text' value={phone} 
                        onChange={event => setPhone(event.target.value)}/> <br />

                <input type='submit' value='Create User' />
            </form>

        </div>
    )
}

export default AddUserAPIForm;