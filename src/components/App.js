import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Navigation from './NavBar';
import Login from './LogIn';
import createTennant from './CreateTennant';
import contactConcierge from './ContactConcierge';
import accountDetails from './AccountDetails';
import changePassword from './ChangePassword';
import buildingDetails from './BuildingDetails';
import viewDings from './ViewDings';

function App() {
  return (
      <Router>
        <Navigation />
        <header className="App-header">
          <h2>Ding Dong</h2>
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Contact" component={contactConcierge} />
          <Route exact path="/:id" component={accountDetails} />
          <Route exact path="/Create-Tennant" component={createTennant} />
          <Route exact path="/change-password" component={changePassword} />
          <Route exact path="/building-details" component={buildingDetails} />
          <Route exact path="/view-dings" component={viewDings} />
        </Switch>
      </Router>
    );
  }

export default App;