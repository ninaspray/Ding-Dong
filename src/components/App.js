import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Navigation from './NavBar';
import Login from './LogIn';
import CreateTennant from './CreateTennant';
import accountDetails from './AccountDetails';
import sendDingDong from './DingDong';
import collectedParcel from './collectedParcel';
import contactConcierge from './ContactConcierge';
import Signup from './SignUp';
import { AuthProvider } from '../contexts/AuthContext';
import Tennant from './FindTennant';



function App() {
  return (
    <AuthProvider>
      <Router>
        <header className="App-header">
          <h2>Ding Dong</h2>
        </header>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={accountDetails}/>
          <Route exact path="/Contact" component={contactConcierge} />
          <Route exact path="/Create" component={CreateTennant} />
          <Route exact path="/tennant" component={Tennant}/> 
          <Route exact path="/SendDingDong" component={sendDingDong} />
          <Route exact path="/ParcelCollected" component={collectedParcel} />
          <Route exact path="/SignUp" component={Signup} />
        </Switch>
      </Router>
    </AuthProvider>
    );
  }

export default App;