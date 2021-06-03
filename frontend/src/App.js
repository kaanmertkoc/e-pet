import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';
import OwnerMainPageScreen from '../src/Screens/OwnerMainPageScreen';
import RegisterScreen from '../src/Screens/RegisterScreen';
import AdminScreen from '../src/Screens/AdminScreen';
import Header from './Components/Header';
import OwnerAppointmentPage from './Screens/OwnerAppointmentsPage';

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
      </Switch>
    </Router>
  );
}

export default App;
