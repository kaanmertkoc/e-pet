import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import OwnerMainPageScreen from '../src/Screens/OwnerMainPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import AdminScreen from '../src/Screens/AdminScreen';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPageScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/admin" exact component={AdminScreen} />
      </Switch>
    </Router>
  );
}

export default App;
