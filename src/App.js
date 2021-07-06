//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <Router>
      <main className='container'>
        <Route path='/' component={HomeScreen} exact />
      </main>
    </Router>
  );
}

export default App;
