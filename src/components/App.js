import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components
import NavBar from './NavBar';
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
          <NavBar />
          <h2>Ding Dong</h2>
          <div>
            <img src="../Images/DingDongLogo.png" alt='DingDongLogo' />
          </div>
        </header>
        <main className="App-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/home" component={accountDetails}/> */}
            {/* <Route exact path="/Contact" component={contactConcierge} /> */}
            <Route exact path="/create" component={CreateTennant} />
            {/* <Route exact path="/SendDingDong" component={sendDingDong} />
            <Route exact path="/ParcelCollected" component={collectedParcel} /> */}
            <Route exact path="/sign-up" component={Signup} />
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
