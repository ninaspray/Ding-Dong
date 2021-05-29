import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CreateTennant from "./CreateTennant";
import Signup from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import DingDongLogo from "../Images/TopPick_transparent_2.png";
import "../styles/App.css";
import "../styles/Footer.css";
import "../styles/Logo.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <header className="App-header">
            <NavBar />
            <div className="logo">
              <img
                src={DingDongLogo}
                width="400px"
                height="220px"
                alt="DingDongLogo"
              />
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
              <Route exact path="/create" component={CreateTennant} />
              <Route exact path="/sign-up" component={Signup} />
            </Switch>
          </main>
        </Router>
        <footer className="App-footer"></footer>
      </AuthProvider>
    </div>
  );
}

export default App;
