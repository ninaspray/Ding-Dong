import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import Navigation from './NavBar';
// import Login from './LogIn';
import HomePage from './HomePage';
import CreateTennant from './CreateTennant';
// import accountDetails from './AccountDetails';
// import sendDingDong from './DingDong';
// import collectedParcel from './collectedParcel';
// import contactConcierge from './ContactConcierge';
import Signup from './SignUp';
import { AuthProvider } from '../contexts/AuthContext';
//import Tennants from './Tennant';
//<Route exact path="/tennant" component={Tennants}/>



function App() {
  return (
    <AuthProvider>
      <Router>
        <header className="App-header">
          <h2>Ding Dong</h2>
        </header>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/home" component={accountDetails}/> */}
          {/* <Route exact path="/Contact" component={contactConcierge} /> */}
          <Route exact path="/create" component={CreateTennant} />
          {/* <Route exact path="/SendDingDong" component={sendDingDong} />
          <Route exact path="/ParcelCollected" component={collectedParcel} /> */}
          <Route exact path="/sign-up" component={Signup} />
        </Switch>
      </Router>
    </AuthProvider>
    );
  }

export default App;
