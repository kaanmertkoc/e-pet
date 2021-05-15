import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPageScreen} />
        <Route path="/register" exact component={RegisterScreen} />
      </Switch>
    </Router>
  );
}

export default App;
