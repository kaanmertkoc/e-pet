import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import AdminScreen from '../src/Screens/AdminScreen';
import Header from './Components/Header';
import SearchPetScreen from './Screens/SearchPetScreen';
import AddPetScreen from './Screens/AddPetScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPageScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/admin" exact component={AdminScreen} />
        <Route path="/search/:id" exact component={SearchPetScreen} />
        <Route path="/addPet" exact component={AddPetScreen} />
      </Switch>
    </Router>
  );
}

export default App;
