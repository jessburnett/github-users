import React, {
  Component, Fragment
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

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    this.setState({users: res.data.items, loading: false});
  }

  //get single user
  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    
    this.setState({user: res.data, loading: false});
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  showAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    setTimeout(()=>{this.setState({ alert: null })}, 3000);
  }


  render() {
    const { loading, user, users } = this.state;
    return (
      <Router>
        <div className="App">
      <Navbar className="navbar bg-primary">
      </Navbar>
      <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path="/" render={ props => (
            <Fragment>
              <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                showClear={users.length > 0 ? true : false }
                showAlert={this.showAlert}/> 
              <Users loading={loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' render={props => (
            <User {...props} getUser={this.getUser} user={user} loading={loading}/>
          )}/>
        </Switch>
      </div>
    </div>
    </Router>
    );
  }
}

export default App;