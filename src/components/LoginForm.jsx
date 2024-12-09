import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    const loginClicked = (event) => {


        event.preventDefault();
        console.log('login clicked!!!');

        if (username === 'Edgar' && password === '123456'){
            navigate('/login-success/' + username);
        }else {
            setMessage('Wrong credentials please try again');
        }
    }

    return <form onSubmit ={loginClicked}>
        <label>Username: </label>
        <input 
            name='username' 
            type='text' 
            value={username}
            onChange={event => {setUsername(event.target.value)}}/> <br />

        <label>Password</label>
        <input 
        name='password' 
        type='password' 
        value={password}
        onChange={event => {setPassword(event.target.value)}}/> <br />

        <input value='Login' type='submit' />

        <h1>{message}</h1>  
    </form>
}

export default LoginForm;