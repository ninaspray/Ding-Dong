import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import NavBar from './NavBar';
import Login from './LogIn';
import CreateTennant from './CreateTennant';
import accountDetails from './AccountDetails';
import sendDingDong from './DingDong';
import buildingDetails from './BuildingDetails';
import collectedParcel from './collectedParcel';
import contactConcierge from './ContactConcierge';
import Signup from './SignUp';
import { AuthProvider } from '../contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <header className="App-header">
          <NavBar />
          <h2>Ding Dong</h2>
          <div>
            <img src="../Images/DingDongLogo.png" alt='DingDongLogo' />
          </div>
        </header>
        <main className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Contact" component={contactConcierge} />
            <Route exact path="/Id" component={accountDetails} />
            <Route exact path="/Create" component={CreateTennant} />
            <Route exact path="/tennant"/> 
            <Route exact path="/SendDingDong" component={sendDingDong} />
            <Route exact path="/BuildingDetails" component={buildingDetails} />
            <Route exact path="/ParcelCollected" component={collectedParcel} />
            <Route exact path="/SignUp" component={Signup} />
          </Switch>
        </main>
      </Router>
      <footer className="App-footer">
        <div>footer goes here</div>
      </footer>
    </AuthProvider>
    );
  }

export default App;