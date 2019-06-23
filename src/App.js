import React, {
  Component
} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import Search from './components/user/Search'
import axios from 'axios'
import PropTypes from 'prop-types'


class App extends Component {
  state = {
    users: [],
    loading: false
  }

  static propTpyes = {
    searchUsers: PropTypes.func.isRequired
  }

  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    this.setState({users: res.data.items, loading: false});
  }

  render() {
    return ( 
    <div className="App">
      <Navbar className="navbar bg-primary">
      </Navbar>
      <div className="container">
        <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    </div>
    );
  }
}

export default App;