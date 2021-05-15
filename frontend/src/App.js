import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import OwnerMainPageScreen from '../src/Screens/OwnerMainPageScreen';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={LandingPageScreen} />
    </Router>
  );
}

export default App;
