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
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  searchUsers = async text => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); 
    this.setState({users: res.data.items, loading: false});
  }

  clearUsers = () => this.setState({ users: [], loading: false });


  render() {
    const { loading, users } = this.state;
    return (
    <div className="App">
      <Navbar className="navbar bg-primary">
      </Navbar>
      <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false }/> 
        <Users loading={loading} users={users}/>
      </div>
    </div>
    );
  }
}

export default App;