import './App.css';
import {Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import BankHeader from './BankAccountManagement/components/BankHeader';
import BankHomePage from './BankAccountManagement/pages/BankHomePage';
import CustomerPage from './BankAccountManagement/pages/CustomerPage';
import AccountsPage from './BankAccountManagement/pages/AccountsPage';
import UpdateAccountPage from './BankAccountManagement/pages/UpdateAccountPage';
import UpdateCustomerPage from './BankAccountManagement/pages/UpdateCustomerPage';
import CreateCustomerPage from './BankAccountManagement/pages/CreateCustomerPage';
import CreateAccountPage from './BankAccountManagement/pages/CreateAccountPage';
import SearchCustomerPage from './BankAccountManagement/pages/SearchCustomerPage';
import SearchAccountPage from './BankAccountManagement/pages/SearchAccountPage';
import FindAccountByCity from './BankAccountManagement/components/FindByCityAPI';
import FindByCityPage from './BankAccountManagement/pages/FindByCityPage';

function App() {

  return (
    <div>
      <BankHeader />
            <Routes>
                <Route path='/' element={<BankHomePage />} />
                <Route path='/customers' element={<CustomerPage />} />
                <Route path="/update-customer/:customerId" element={<UpdateCustomerPage />} />
                <Route path="/create-customer" element={<CreateCustomerPage />} />
                <Route path='/accounts' element={<AccountsPage />} />
                <Route path="/update-account/:accountId" element={<UpdateAccountPage />} />
                <Route path="/create-account" element={<CreateAccountPage />} />
                <Route path="/find-by-id" element={<SearchCustomerPage />} />
                <Route path="/find-account-by-id" element={<SearchAccountPage />} />
                <Route path="/find-by-city" element={<FindByCityPage />} />
            </Routes>
    </div>
  )
}

export default App;
