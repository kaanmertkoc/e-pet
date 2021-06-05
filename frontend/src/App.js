import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import AdminScreen from '../src/Screens/AdminScreen';
import VetMainPageScreen from '../src/Screens/VetMainPageScreen';
import Header from './Components/Header';
import SearchPetScreen from './Screens/SearchPetScreen';
import AddPetScreen from './Screens/AddPetScreen';
import PetInfoScreen from './Screens/PetInfoScreen';

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
        <Route path="/vet-main-page" exact component={VetMainPageScreen} />
      </Switch>
    </Router>
  );
}

export default App;
