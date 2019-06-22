import React, {
  Component
} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';

class App extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return ( 
    <div className="App">
      <Navbar className="navbar bg-primary">
      </Navbar>
      <div className="container">
        <Users/>
      </div>
    </div>
    );
  }
}

export default App;