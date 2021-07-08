//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import TaxSummaryScreen from './screens/TaxSummaryScreen.js';
import PaymentSuccessScreen from './screens/PaymentSuccessScreen.js';

function App() {
  return (
    <Router>
      <main className='container'>
        <Route path='/tax-summary' component={TaxSummaryScreen} exact />
        <Route path='/payment-success' component={PaymentSuccessScreen} exact />
        <Route path='/' component={HomeScreen} exact />
      </main>
    </Router>
  );
}

export default App;
