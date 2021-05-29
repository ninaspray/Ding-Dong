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
import DingDongLogo from '../Images/TopPick_transparent_2.png'
import '../styles/App.css';
import '../styles/Footer.css';
import '../styles/Logo.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <header className="App-header">
            <NavBar />
            <div className='logo'>
              {/* <img src={DingDongLogo} width='400px' height='220px' alt='DingDongLogo' /> */}
            </div>
          </header>
          <main className="App-content">
            <div className='logo'>
              <img src={DingDongLogo} width='400px' height='220px' alt='DingDongLogo' />
            </div>
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
        </footer>
      </AuthProvider>
    </div>
    );
  }

export default App;

/*
list: Phase 1
  Search: |Diego / 2A|

  | Flat #  | Tenant  | Actions
  | 1A      | Diego   | [ DingDong ] -> create a package / send email notification
  | 1B      | Nina    | [ Collected ]
  | 1C      | Rui     | [ DingDong ]
  | 2A      | Martyna | [ Collected ]
  | 2B      | Stu     | [ Collected ]
  | 2C      | Matt    | [ DingDong ]

  create a package

  [ DingDong ] -> [ small / medium / large] [submit]

 
*/