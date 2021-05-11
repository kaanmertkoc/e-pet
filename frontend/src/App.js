import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPageScreen from '../src/Screens/LandingPageScreen';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPageScreen} />
    </Router>
  );
}

export default App;
