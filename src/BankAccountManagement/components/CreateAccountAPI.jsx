import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreateAccountAPI = () => {
    const navigate = useNavigate();
    const api = "http://localhost:8080/api/v1/accounts";
    
    const [ balance, setBalance ] = useState('');
    const [ customerId, setCustomerId] = useState('');
    const [ interestRate, setInterestRate ] = useState('');
    const [ accountType, setAccountType ] = useState('');

    const submitHandler = () => {
        axios
            .post(api, 
                {
                    balance: balance,
                    customerId: customerId,
                    interestRate: interestRate,
                    accountType: accountType
                })
            .then(response => {
                navigate('/accounts')
            })
            .catch(error => console.log(error));
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Balance: </label>
                    <input
                        name='balance' type='number' 
                        value={balance} onChange={event => setBalance(event.target.value)}/><br />
                
                <label>Customer ID: </label>
                    <input
                        name='customerId' type='number' 
                        value={customerId} onChange={event => setCustomerId(event.target.value)}/><br />

                <label>InterestRate: </label>
                    <input
                        name='interestRate' type='number' 
                        value={interestRate} onChange={event => setInterestRate(event.target.value)}/><br />       
            
                <label>Account Type: </label>
                    <input
                        name='accountType' type='text' 
                        value={accountType} onChange={event => setAccountType(event.target.value)}/><br />

                <input type='submit' value='Create Account' />
                    
            </form>
        </div>
    )
}

export default CreateAccountAPI;