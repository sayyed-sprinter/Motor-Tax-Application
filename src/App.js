//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import TaxSummaryScreen from './screens/TaxSummaryScreen.js';
import PaymentSuccessScreen from './screens/PaymentSuccessScreen.js';
import InsuranceSummaryScreen from './screens/InsuranceSummaryScreen.js';
import AdminScreen from './screens/AdminScreen.js';
import Header from './components/Header.js';
import TaxDetailScreen from './screens/TaxDetailScreen.js';
import FAQsScreen from './screens/FAQsScreen.js';
import SupportScreen from './screens/SupportScreen.js';
import InsuranceCompanies from './screens/InsuranceCompanies.js';

function App() {
  return (
    <Router>
      <main className='container'>
        <Header />
        <Route path='/tax-summary' component={TaxSummaryScreen} exact />
        <Route
          path='/insurance-summary'
          component={InsuranceSummaryScreen}
          exact
        />
        <Route path='/payment-success' component={PaymentSuccessScreen} exact />
        <Route path='/tax-details' component={TaxDetailScreen} exact />
        <Route path='/faqs' component={FAQsScreen} exact />
        <Route path='/support' component={SupportScreen} exact />
        <Route path='/admin' component={AdminScreen} exact />
        <Route
          path='/insurance-companies'
          component={InsuranceCompanies}
          exact
        />
        <Route path='/' component={HomeScreen} exact />
      </main>
    </Router>
  );
}

export default App;
