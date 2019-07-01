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
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
 
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    setUsers(res.data.items);
    setLoading(false);
  }

  //get single user
  const getUser = async (username) => {
    setLoading(true);
    
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    
    setUser(res.data);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  }

    return (
      <Router>
        <div className="App">
      <Navbar className="navbar bg-primary">
      </Navbar>
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/" render={ props => (
            <Fragment>
              <Search searchUsers={searchUsers} 
                clearUsers={clearUsers} 
                showClear={users.length > 0 ? true : false }
                setAlert={showAlert}/> 
              <Users loading={loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={getUser} user={user} loading={loading}/>
          )}/>
        </Switch>
      </div>
    </div>
    </Router>
    );
}

export default App;