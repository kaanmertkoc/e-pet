import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import OwnerMainPageScreen from '../src/Screens/OwnerMainPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import AdminScreen from '../src/Screens/AdminScreen';
import VetMainPageScreen from '../src/Screens/VetMainPageScreen';
import Header from './Components/Header';
import OwnerAppointmentPage from './Screens/OwnerAppointmentsPage';
import VetInformation from './Screens/VetInformation';
import SearchPetScreen from './Screens/SearchPetScreen';
import OwnerInformation from './Screens/OwnerInformation';
import OwnerPetsPage from './Screens/OwnerPetsPage';
import VetAppointmentPage from './Screens/VetAppointmentsPage';
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
        <Route path="/owner" exact component={OwnerMainPageScreen} />
        <Route path="/ownerAppointment" exact component={OwnerAppointmentPage} />
        <Route path="/vetInformation" exact component={VetInformation} />
        <Route path="/vet-main-page" exact component={VetMainPageScreen} />
        <Route path="/search/:id" exact component={SearchPetScreen} />
        <Route path="/ownerInformation" exact component={OwnerInformation} />
        <Route path="/ownerPets" exact component={OwnerPetsPage} />
        <Route path="/VetAppointment" exact component={VetAppointmentPage} />
        <Route path="/addPet" exact component={AddPetScreen} />
        <Route path="/petInfo" exact component={PetInfoScreen} />
      </Switch>
    </Router>
  );
}

export default App;
