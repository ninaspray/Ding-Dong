import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Navigation from './NavBar';
import Login from './LogIn';
import CreateTennant from './CreateTennant';
import accountDetails from './AccountDetails';
import changePassword from './ChangePassword';
import buildingDetails from './BuildingDetails';
import viewDings from './ViewDings';
import contactConcierge from './ContactConcierge';

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
          <Route exact path="/Id" component={accountDetails} />
          <Route exact path="/Create" component={CreateTennant} />
          <Route exact path="/Password" component={changePassword} />
          <Route exact path="/BuildingDetails" component={buildingDetails} />
          <Route exact path="/ViewDings" component={viewDings} />
        </Switch>
      </Router>
    );
  }

export default App;