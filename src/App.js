import React, {
  Fragment, useState
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import User from './components/user/User'
import Search from './components/user/Search'
import About from './components/pages/About'
import Alert from './components/layout/Alert'
import GithubState from './context/github/GithubState'

const App = () => {
  const [alert, setAlert] = useState(null);
 
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  }

    return (
      <GithubState>
        <Router>
          <div className="App">
        <Navbar className="navbar bg-primary">
        </Navbar>
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/" render={ props => (
              <Fragment>
                <Search setAlert={showAlert}/> 
                <Users/>
              </Fragment>
            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props => (
              <User {...props}/>
            )}/>
          </Switch>
        </div>
      </div>
      </Router>
    </GithubState>
    );
}

export default App;