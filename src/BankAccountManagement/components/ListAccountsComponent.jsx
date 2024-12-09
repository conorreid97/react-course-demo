import AccountCard from "./AccountCard";
import { useState } from 'react';

const ListAccountsComponent = () => {

    const [accounts, setAccounts ] = useState([
        {
            accountId: '1',
            balance: 2343,
            customerId: '2',
            interestRate: 3.5,
            accountType: 'Savings'
        },
        {
            accountId: '2',
            balance: 200,
            customerId: '2',
            interestRate: 3.5,
            accountType: 'Checking'
        },
        {
            accountId: '3',
            balance: 1200,
            customerId: '3',
            interestRate: 3.5,
            accountType: 'Savings'
        },
        {
            accountId: '4',
            balance: 2000,
            customerId: '4',
            interestRate: 3.5,
            accountType: 'Checking'
        },
        {
            accountId: '5',
            balance: 4000,
            customerId: '4',
            interestRate: 3.5,
            accountType: 'Savings'
        },
    ]);

    return (
        <div>
            {
                accounts.map(account => 
                    <AccountCard key={account.accountId} account={account} />)
            }
        </div>
    )
}

export default ListAccountsComponent;