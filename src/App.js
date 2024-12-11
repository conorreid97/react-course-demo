import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import DailyFeedPage from './pages/DailyFeedPage';
import JoinUsPage from './pages/JoinUsPage';
import PropsPage from './pages/PropsPage';
import {Routes, Route } from 'react-router-dom';
import StatePage from './pages/StatePage';
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './components/LoginSuccessPage';
import ConditionalsPage from './pages/ConditionalsPage';
import LoopsPage from './pages/LoopsPage';
import AllUsersFromAPIPage from './pages/AllUsersFromAPIPage';
import AddUserAPIPage from './pages/AddUserAPIPage'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import VanillaBootstrapForm from './components/VanillaBootstrapForm';
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

function App() {

  return (
    <div>
      {/* <Header />
      <Routes> */}
        {/* Module 3 */}
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/daily-feed' element={<DailyFeedPage />}/>
        <Route path='/join-us' element={<JoinUsPage />}/> */}

        {/* Module 4 */}
        {/* <Route path='/props' element={<PropsPage />}/> */}

        {/* Module 5 */}
        {/* <Route path='/state' element={<StatePage />}/> */}
        
        {/* Module 6 */}
        {/* <Route path='/login' element={<LoginPage />}/> */}

        {/* Module 7 */}
        {/* <Route path='/login-success/:username' element={<LoginSuccessPage />}/> */}
    
        {/* Module 8 */}
        {/* <Route path='/conditionals' element={<ConditionalsPage />}/>
        <Route path='/loops' element={<LoopsPage />}/> */}
      
        {/* Module 9 */}
        {/* <Route path='/api-list-all' element={<AllUsersFromAPIPage />} /> */}
      
        {/* Module 9 */}
        {/* <Route path='/api-list-all' element={<AllUsersFromAPIPage />} />
        <Route path='/add-user' element={<AddUserAPIPage />} /> */}
      
        {/* Module 10 */}
        {/* <Route path='/vanilla-bootstrap-form' element={<VanillaBootstrapForm />} /> */}
        
       {/* </Routes>
      <Footer />  */}
      
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
            </Routes>
    </div>
  )
}

export default App;
