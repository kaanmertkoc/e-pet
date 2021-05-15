import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={LandingPageScreen} />

      <Route path="/register" component={RegisterScreen} />


    </Router>
  );
}

export default App;
